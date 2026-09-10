import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Crystal Arc Factory LLC collects, uses, and protects your personal data across our website, enquiry forms, and WhatsApp channels.",
  alternates: alternatesFor("en", "/privacy"),
  robots: { index: true, follow: true },
};

const sectionStyle: React.CSSProperties = { marginBottom: "48px" };
const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
  fontWeight: 400,
  color: "var(--color-ivory)",
  marginBottom: "16px",
};
const pStyle: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.85,
  color: "var(--color-i60)",
  marginBottom: "14px",
};
const ulStyle: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.85,
  color: "var(--color-i60)",
  marginBottom: "14px",
  paddingLeft: "22px",
};

export default function PrivacyPage() {
  return (
    <>
      <section style={{ background: "var(--color-ivory)", paddingTop: "160px", paddingBottom: "64px" }}>
        <div className="con">
          <div className="eyebrow" style={{ color: "var(--color-gold)", marginBottom: "18px" }}>Legal</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 300,
              color: "var(--color-bg)",
              marginBottom: "16px",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(247,242,235,0.55)" }}>
            Last updated: 15 July 2026 &nbsp;·&nbsp; Crystal Arc Factory LLC, Dubai, United Arab Emirates
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "80px 0 120px" }}>
        <div className="con" style={{ maxWidth: "800px" }}>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Who We Are</h2>
            <p style={pStyle}>
              This Privacy Policy is issued by Crystal Arc Factory LLC (&ldquo;Crystal Arc,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              a manufacturer of custom trophies, awards, corporate gifts, and luxury packaging headquartered in Dubai,
              United Arab Emirates, with additional offices in Abu Dhabi, UAE and Riyadh, Saudi Arabia. This Policy explains
              how we collect, use, disclose, and safeguard information when you visit crystalarc.net (the &ldquo;Site&rdquo;),
              contact us by WhatsApp, email, or phone, or engage us to design and manufacture a commissioned piece.
            </p>
            <p style={pStyle}>
              We process personal data in accordance with the UAE Federal Decree-Law No. 45 of 2021 on the Protection
              of Personal Data (&ldquo;UAE PDPL&rdquo;) and, where applicable to customers located outside the UAE, the data
              protection principles generally expected under GDPR (EU/UK) and equivalent frameworks.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Information We Collect</h2>
            <p style={pStyle}>We collect the following categories of information:</p>
            <ul style={ulStyle}>
              <li><strong>Contact and enquiry data</strong>, name, company name, email address, phone/WhatsApp number, and any details you submit through our enquiry forms, brochure downloads, or direct messages.</li>
              <li><strong>Order and commission data</strong>, project briefs, design references, engraving text, logos/artwork you supply, delivery addresses, and billing details required to quote, produce, and ship your piece.</li>
              <li><strong>Communications</strong>, records of correspondence via email, WhatsApp, and phone, kept to service your enquiry or order and to resolve any dispute.</li>
              <li><strong>Website usage data</strong>, IP address, browser type, device information, pages visited, and referral source, collected automatically via standard web server logs and analytics/functional cookies (see Section 5).</li>
              <li><strong>Payment-related data</strong>, where deposits or balances are paid online, our payment processor handles card details directly; we retain only transaction references and amounts, not full card numbers.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. How We Use Your Information</h2>
            <ul style={ulStyle}>
              <li>To respond to enquiries and prepare quotations or proposals.</li>
              <li>To design, manufacture, personalise, invoice, and deliver commissioned pieces.</li>
              <li>To communicate order status, production timelines, and delivery updates.</li>
              <li>To maintain business records for accounting, warranty, and legal compliance purposes.</li>
              <li>To improve our Site, catalogue, and customer experience.</li>
              <li>To send you updates about Crystal Arc where you have opted in, and which you may unsubscribe from at any time.</li>
              <li>To detect, investigate, and prevent fraud, misuse, or security incidents.</li>
            </ul>
            <p style={pStyle}>
              We do not sell, rent, or trade your personal data to third parties for their own marketing purposes.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Legal Basis for Processing</h2>
            <p style={pStyle}>
              We process your data on the basis of: (a) performance of a contract, where you have requested a quote
              or placed an order; (b) legitimate business interests, such as improving our services and preventing
              fraud; (c) consent, where you have opted in to marketing communications; and (d) compliance with legal
              obligations, such as tax and accounting record-keeping requirements under UAE law.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Cookies and Similar Technologies</h2>
            <p style={pStyle}>
              Our Site uses cookies and similar technologies to remember your preferences, understand how visitors
              use the Site, and measure the effectiveness of our content. These fall into two categories:
            </p>
            <ul style={ulStyle}>
              <li><strong>Essential/functional cookies</strong>, required for the Site to operate correctly (e.g. remembering that you have viewed our WhatsApp widget).</li>
              <li><strong>Analytics cookies</strong>, help us understand aggregate visitor behaviour so we can improve the Site. These do not identify you personally.</li>
            </ul>
            <p style={pStyle}>
              You can disable cookies through your browser settings at any time; doing so may affect some Site functionality.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Sharing and Disclosure</h2>
            <p style={pStyle}>We share information only where necessary, including with:</p>
            <ul style={ulStyle}>
              <li><strong>Logistics and shipping partners</strong>, to deliver your order.</li>
              <li><strong>Payment processors</strong>, to process deposits and balances securely.</li>
              <li><strong>Professional advisors</strong> (accountants, auditors, legal counsel), where required.</li>
              <li><strong>Government or regulatory authorities</strong>, where required by UAE law or a valid legal process.</li>
              <li><strong>Successor entities</strong>, in the event of a merger, acquisition, or sale of business assets, subject to equivalent confidentiality protections.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Data Retention</h2>
            <p style={pStyle}>
              We retain personal data for as long as necessary to fulfil the purposes described in this Policy,
              including any statutory retention period required for accounting, tax, or warranty purposes under UAE law
              (generally up to 5 years from the end of the relevant financial year, or longer where a legal claim is
              reasonably anticipated). Design files and artwork you supply for a commission are retained for our
              production records unless you request deletion in writing.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Data Security</h2>
            <p style={pStyle}>
              We apply reasonable administrative, technical, and physical safeguards to protect personal data against
              unauthorised access, alteration, disclosure, or destruction. No method of transmission or storage is
              100% secure, and while we work to protect your data, we cannot guarantee absolute security.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. Your Rights</h2>
            <p style={pStyle}>Subject to applicable law, you have the right to:</p>
            <ul style={ulStyle}>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your data, subject to our legal retention obligations.</li>
              <li>Object to or restrict certain processing, including direct marketing.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
              <li>Request a copy of your data in a portable format, where technically feasible.</li>
            </ul>
            <p style={pStyle}>
              To exercise any of these rights, contact us at <a href="mailto:info@crystalarc.net" style={{ color: "var(--color-gold)" }}>info@crystalarc.net</a>.
              We will respond within a reasonable time and in line with applicable legal timeframes.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>10. International Data Transfers</h2>
            <p style={pStyle}>
              As we serve clients across the UAE, GCC, and internationally, your data may be processed in countries
              other than your own, including the United Arab Emirates. Where we transfer data internationally, we
              take steps to ensure it remains protected consistent with this Policy and applicable law.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>11. Children&apos;s Privacy</h2>
            <p style={pStyle}>
              Our Site and services are directed at businesses and adults. We do not knowingly collect personal data
              from children under 18. If you believe a child has provided us with personal data, please contact us
              so we can remove it.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>12. Third-Party Services, Platforms &amp; AI Tools</h2>
            <p style={pStyle}>
              In operating our business and this Site, we use a range of third-party platforms, applications, and
              AI-assisted tools, which may include (without limitation) Google (e.g. Workspace, Analytics,
              advertising), Meta/Facebook (e.g. business messaging, advertising), WhatsApp, and AI assistants such as
              OpenAI&apos;s ChatGPT and Anthropic&apos;s Claude, among others. We use these tools for purposes such as
              website analytics, communications, marketing, scheduling, drafting, design assistance, and general
              administrative work.
            </p>
            <p style={pStyle}>
              The specific tools and providers we use may change from time to time as our business and technology
              needs evolve, without a corresponding update to this Policy for each individual tool. Where information
              you provide to us is processed through one of these third-party platforms, that processing is also
              governed by that provider&apos;s own privacy policy and terms of service, which operate independently of
              this Policy and which we encourage you to review. We select reputable providers and take reasonable
              care in how we use them, but we do not control, and are not responsible for, the independent data
              handling practices, security, or retention policies of these third parties.
            </p>
            <p style={pStyle}>
              Our Site may also link to third-party platforms (e.g. WhatsApp, social media). We are not responsible
              for the privacy practices of those third parties; please review their own policies.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>13. Changes to This Policy</h2>
            <p style={pStyle}>
              We may update this Policy from time to time to reflect changes in our practices or legal requirements.
              The &ldquo;Last updated&rdquo; date at the top of this page indicates the most recent revision. Material changes
              will be indicated on this page.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>14. Contact Us</h2>
            <p style={pStyle}>
              For any questions about this Privacy Policy or how we handle your data, contact:
            </p>
            <p style={{ ...pStyle, color: "var(--color-ivory)" }}>
              Crystal Arc Factory LLC<br />
              Dubai, United Arab Emirates<br />
              Email: <a href="mailto:info@crystalarc.net" style={{ color: "var(--color-gold)" }}>info@crystalarc.net</a><br />
              Phone: +971 4 347 9191 &nbsp;·&nbsp; WhatsApp: +971 56 536 4384
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
