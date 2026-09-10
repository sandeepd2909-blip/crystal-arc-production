/**
 * Build, check and publish, in one command.
 *
 * `netlify deploy --prod` fails on this account with `JSONHTTPError: Forbidden`
 * — cause never established, and not a plan or permission limit as far as we
 * could tell. The working sequence is to deploy a draft and then promote it by
 * id through the API, which is fiddly to do by hand and easy to half-finish:
 * a draft that is never promoted looks like a successful deploy in the terminal
 * while the live site stays on the previous version.
 *
 * The checks run before the deploy, not after, and a failure stops it.
 */
import { execSync } from "node:child_process";

const SITE_ID = "1c042422-bce4-40d4-b56b-ff599a3350b0";
const SITE_URL = "https://crystalarc-website-testing-phase.netlify.app";

const run = (cmd, opts = {}) =>
  execSync(cmd, { stdio: "inherit", encoding: "utf8", ...opts });
const capture = (cmd) => execSync(cmd, { encoding: "utf8" });

function step(n, total, label) {
  console.log(`\n[${n}/${total}] ${label}`);
}

try {
  step(1, 4, "Checking content…");
  run("node scripts/check-jobs.mjs");
  run("node scripts/audit-facts.mjs");
  run("node scripts/audit-translations.mjs");

  step(2, 4, "Building the site…");
  run("npm run build");

  step(3, 4, "Checking every page…");
  run("node scripts/audit-chrome.mjs");

  step(4, 4, "Publishing…");
  const out = capture("netlify deploy --dir=out --json");

  /**
   * Read the id from `--json`, falling back to the deploy URL, which carries it
   * as the sub-domain: https://<id>--crystalarc-website-testing-phase…
   *
   * Not by scanning the output for a 24-character hex string: several ids go
   * past in a deploy and the first one is not the deploy's. Doing that promoted
   * the wrong id and failed with `JSONHTTPError: Not Found` while the terminal
   * above it read "Deploy is live!".
   */
  let id;
  try {
    id = JSON.parse(out.slice(out.indexOf("{"), out.lastIndexOf("}") + 1)).deploy_id;
  } catch {
    id = out.match(/https:\/\/([0-9a-f]{24})--/)?.[1];
  }
  if (!id) {
    console.error("\nCould not read the deploy id from the Netlify output:\n");
    console.error(out);
    process.exit(1);
  }

  const res = capture(
    `netlify api restoreSiteDeploy --data "{\\"site_id\\":\\"${SITE_ID}\\",\\"deploy_id\\":\\"${id}\\"}"`,
  );
  const state = JSON.parse(res).state;
  if (state !== "ready") {
    console.error(`\nPublish returned state "${state}", expected "ready".`);
    process.exit(1);
  }

  console.log(`\nLive: ${SITE_URL}`);
  console.log(`Careers: ${SITE_URL}/en/careers\n`);
} catch (e) {
  // The failing step has already printed its own reason.
  console.error("\nStopped — nothing was published.\n");
  process.exit(1);
}
