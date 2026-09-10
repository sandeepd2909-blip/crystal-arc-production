import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Crystal Arc Factory LLC, including our shipping, delivery, and no-refund policy for custom-manufactured trophies, awards, and corporate gifts.",
  alternates: alternatesFor("en", "/terms"),
  robots: { index: true, follow: true },
};

const sectionStyle: React.CSSProperties = { marginBottom: "44px" };
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

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(247,242,235,0.55)" }}>
            Last updated: 15 July 2026 &nbsp;·&nbsp; Crystal Arc Factory LLC, Dubai, United Arab Emirates
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "80px 0 120px" }}>
        <div className="con" style={{ maxWidth: "800px" }}>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Acceptance of These Terms</h2>
            <p style={pStyle}>
              These Terms of Use (&ldquo;Terms&rdquo;) are a binding legal agreement between you and Crystal Arc
              Factory LLC (&ldquo;Crystal Arc,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By accessing or
              using crystalarc.net (the &ldquo;Site&rdquo;), submitting an enquiry, requesting a quotation, or placing
              an order by any channel, including WhatsApp, email, phone, or in person. You confirm that you have
              read, understood, and agree to be bound by these Terms in full. If you are acting on behalf of a
              company or other organisation, you confirm you have authority to bind that organisation to these
              Terms, and &ldquo;you&rdquo; refers to that organisation. If you do not agree to these Terms, you must not
              use the Site or place an order.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. About Crystal Arc</h2>
            <p style={pStyle}>
              Crystal Arc Factory LLC is a manufacturer of custom trophies, awards, corporate gifts, and luxury
              packaging, headquartered in Dubai, United Arab Emirates, with offices in Abu Dhabi, UAE and Riyadh,
              Saudi Arabia. These Terms apply to all quotations, orders, and commissions placed through our Site,
              WhatsApp, email, phone, or in person, and supersede any prior discussions, proposals, or
              representations not confirmed in writing.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Website Use and Intellectual Property</h2>
            <p style={pStyle}>
              All content on the Site, including text, images, product photography, 3D models, and design layouts,              is owned by or licensed to Crystal Arc and is protected by copyright, trademark, and other intellectual
              property laws worldwide. You may view and share Site content for personal, non-commercial reference,
              but may not reproduce, copy, scrape, resell, sublicense, or use it for any commercial purpose without
              our prior written consent. Any unauthorised use may result in legal action and, where applicable,
              claims for damages and costs.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Quotations, Orders &amp; Custom Commissions</h2>
            <p style={pStyle}>
              Every Crystal Arc piece is custom-manufactured to order. Our process generally follows: (1) you submit
              a brief via the Site, WhatsApp, or email; (2) we provide a written quotation and, where applicable, a
              3D render or design proof for your approval; (3) once you approve the design and confirm the order in
              writing (including by email, WhatsApp message, or signed invoice), a binding contract is formed on
              these Terms, and production begins. Prices quoted are valid for the period stated in the quotation and
              may change if the brief, quantity, materials, or timeline change after confirmation.
            </p>
            <p style={pStyle}>
              Because every piece begins production only after your written approval of the design, you are solely
              responsible for checking all text, spelling, logos, colours, and dimensions before approving. By
              approving a design, you accept it as final and release Crystal Arc from any liability for errors,
              omissions, or inaccuracies that were present in the design you approved.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Pricing, Payment &amp; Title</h2>
            <p style={pStyle}>
              Prices are quoted in AED or USD as stated on your quotation. Unless otherwise agreed in writing, we
              require a deposit to confirm an order and begin production, with the balance due before or upon
              delivery/collection, as specified in your written quotation or invoice. Production will not commence,
              and dispatch will not occur, until payment terms agreed in writing have been met.
            </p>
            <p style={pStyle}>
              Ownership (title) in the goods remains with Crystal Arc until payment has been received in full. If
              payment is overdue, we may, at our discretion, suspend further work, withhold delivery, charge
              reasonable storage fees for completed goods awaiting collection beyond 14 days, and/or refer the
              outstanding balance for collection, with you responsible for any reasonable collection costs incurred.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Shipping &amp; Delivery</h2>
            <p style={pStyle}>
              Shipping method, cost, and estimated timeline are discussed and agreed with you individually at the
              time you place your order. They are not fixed in advance, since they depend on destination,
              quantity, and product. If you require expedited or rush shipping, tell us at the time of ordering: we
              do accommodate fast-shipping requests, but any expedited timeline must be committed to in writing
              (email or WhatsApp confirmation) before it is treated as agreed.
            </p>
            <p style={pStyle}>
              Manufacturing and shipping timelines are estimates, not guarantees. Delays can occur due to
              production complexity, material availability, courier/customs processing, or events outside our
              control, and Crystal Arc will not be held liable for any loss, cost, or damage arising from such
              delays, beyond making reasonable efforts to keep you informed and to resolve the delay.
            </p>
            <p style={pStyle}>
              Risk in the goods, including risk of loss or damage in transit, passes to you upon handover to the
              shipping carrier or upon collection from our facility, whichever applies to your order. You are
              responsible for arranging any transit insurance you require.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Returns, Refunds &amp; Cancellations</h2>
            <p style={pStyle}>
              <strong>All Crystal Arc products are custom-made to your specifications and are not eligible for
              return, exchange, or refund once production has commenced,</strong> except where the piece delivered
              does not conform to the design you approved in writing (a genuine manufacturing defect or error on our
              part), and provided you notify us in writing within 7 days of delivery. Because each piece is produced
              specifically for you and cannot be resold, we are unable to accept change-of-mind returns, and no
              refund will be issued once your design has been approved and production has begun.
            </p>
            <p style={pStyle}>
              If you have any requirement, preference, or concern about your order, including quantity changes,
              cancellation, or timing. You must raise it at the time of placing your order, before production
              begins, so it can be discussed and confirmed in writing. If you cancel an order after production has
              begun, you remain liable for the full price of the order, as costs for materials, labour, and
              engraving are committed at that stage; Crystal Arc cannot be held responsible for change requests,
              cancellations, or dissatisfaction with specifications that were approved in advance.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Natural Material Variation</h2>
            <p style={pStyle}>
              Crystal, glass, wood, resin, and metal are natural or hand-finished materials, and minor variations in
              colour, grain, texture, or finish between the approved render/sample and the final piece are expected,
              inherent to bespoke manufacturing, and do not constitute a defect or grounds for return or refund.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. Intellectual Property in Custom Designs &amp; Your Warranties</h2>
            <p style={pStyle}>
              Where you supply your own logo, trademark, photograph, or artwork for a commission, you represent and
              warrant that you own it or are authorised to use and reproduce it, and that it does not infringe any
              third party&apos;s intellectual property, privacy, or other rights. You grant Crystal Arc a licence to
              reproduce that material solely to manufacture your order. You agree to indemnify and hold Crystal Arc
              harmless against any claim, loss, damage, or cost (including legal fees) arising from a breach of this
              warranty. Original design concepts developed by Crystal Arc for your commission remain Crystal Arc&apos;s
              intellectual property and may be used by Crystal Arc for portfolio, marketing, and future reference
              unless you request confidentiality in writing at the time of ordering.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>10. Disclaimer of Warranties</h2>
            <p style={pStyle}>
              Except as expressly stated in these Terms or as required by mandatory law, Crystal Arc makes no other
              warranties, express or implied, regarding the goods, the Site, or any related services, including any
              implied warranty of merchantability, fitness for a particular purpose, or non-infringement. Any advice,
              recommendation, or information given by Crystal Arc staff, whether in writing or verbally, does not
              create any warranty not expressly stated in a written quotation or these Terms.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>11. Limitation of Liability</h2>
            <p style={pStyle}>
              To the maximum extent permitted by law, Crystal Arc&apos;s total aggregate liability arising out of or in
              connection with an order, however caused (including under contract, tort/negligence, or otherwise),
              shall not exceed the total amount you actually paid to Crystal Arc for that specific order. In no event
              will Crystal Arc be liable for any indirect, incidental, special, consequential, or punitive damages,
              or for loss of profit, revenue, business, goodwill, reputation, or anticipated savings, or for loss of
              or damage to an event, ceremony, or occasion date, even if Crystal Arc has been advised of the
              possibility of such loss. Nothing in these Terms excludes or limits liability that cannot lawfully be
              excluded or limited, including liability for death or personal injury caused by proven gross negligence
              or liability for fraud.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>12. Indemnification</h2>
            <p style={pStyle}>
              You agree to indemnify, defend, and hold harmless Crystal Arc, its officers, employees, and agents from
              and against any claim, demand, liability, damage, loss, or expense (including reasonable legal fees)
              arising from: (a) your breach of these Terms; (b) your misuse of the Site or any Crystal Arc product;
              (c) content, artwork, or instructions you supplied for a commission; or (d) your violation of any law
              or third-party right.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>13. Force Majeure</h2>
            <p style={pStyle}>
              Crystal Arc is not liable for any failure or delay in performance caused by events beyond our
              reasonable control, including natural disasters, epidemics, government action, war, customs
              restrictions, courier or supply-chain disruption, labour disputes, or utility or systems failure. If
              such an event continues for more than 60 days, either party may cancel the affected order by written
              notice, in which case you will be charged for work and materials committed up to that point.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>14. Confidentiality</h2>
            <p style={pStyle}>
              Each party agrees to keep confidential any non-public business, pricing, design, or technical
              information disclosed by the other in connection with an order, and to use it only for the purpose of
              fulfilling that order, except where disclosure is required by law or a competent authority.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>15. Electronic Communications &amp; Records</h2>
            <p style={pStyle}>
              You agree that communications by email and WhatsApp constitute &ldquo;writing&rdquo; and a valid,
              binding method of approving designs, confirming orders, and agreeing to variations under these Terms,
              and that Crystal Arc&apos;s copies of such communications and its internal order records are admissible
              evidence of their content and of your agreement, absent manifest error.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>16. Governing Law &amp; Dispute Resolution</h2>
            <p style={pStyle}>
              These Terms, and any dispute or claim arising out of or in connection with them or an order (including
              non-contractual disputes), are governed by the laws of the United Arab Emirates.
            </p>
            <p style={pStyle}>
              Before commencing any legal proceedings, the parties agree to first attempt to resolve the dispute in
              good faith through written notice to the other party and at least 30 days of good-faith negotiation.
              This clause does not prevent either party from seeking urgent injunctive relief where genuinely
              necessary. Subject to the foregoing, the courts of Dubai, UAE have exclusive jurisdiction over any
              dispute that is not resolved through negotiation, and you submit to that jurisdiction, without
              prejudice to any mandatory consumer-protection rights you may have under the law of your own country
              of residence that cannot be excluded by agreement.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>17. No Waiver, Assignment &amp; Survival</h2>
            <p style={pStyle}>
              No failure or delay by Crystal Arc in exercising any right under these Terms operates as a waiver of
              that right. Crystal Arc may assign or subcontract its rights and obligations under these Terms; you may
              not assign your rights or obligations without our prior written consent. Sections relating to
              intellectual property, warranties, indemnification, limitation of liability, confidentiality, and
              dispute resolution survive the completion, cancellation, or termination of any order.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>18. Severability, Entire Agreement &amp; Language</h2>
            <p style={pStyle}>
              If any provision of these Terms is found unenforceable by a court of competent jurisdiction, that
              provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions
              will continue in full force and effect. These Terms, together with your written quotation and/or
              invoice, constitute the entire agreement between you and Crystal Arc for your order, and supersede all
              prior discussions, proposals, or representations, whether written or oral, not expressly incorporated
              into them. These Terms are drafted in English; if translated into another language for convenience, the
              English version prevails in the event of any conflict.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>19. Changes to These Terms</h2>
            <p style={pStyle}>
              We may update these Terms from time to time; the version in effect at the time you place an order
              governs that order. The &ldquo;Last updated&rdquo; date above reflects the most recent revision.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>20. Contact Us</h2>
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
