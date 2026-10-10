import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArticleLayout } from "@/src/components/sections/article-layout";
import { pageMetadata, pages } from "@/src/lib/seo";
import { site } from "@/src/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(pages.terms);
}

const updated = "10 October 2026";

export default function TermsPage() {
  return (
    <ArticleLayout eyebrow="Legal" title="Terms and Conditions" showCta={false}>
      <p className="text-sm text-ink">Last updated: {updated}</p>
      <p>
        These terms govern your use of {site.url} (the &quot;site&quot;). They are intended for businesses, including
        depot, transport, and procurement teams, and for drivers or fleet owners considering subcontract work. They do
        not, by themselves, create a contract to carry goods.
      </p>

      <Section title="1. Who we are">
        <p>
          The site is operated by Shezuna, {site.address}. You can contact us at{" "}
          <a className="text-electric underline" href={`mailto:${site.email}`}>{site.email}</a> or on{" "}
          <a className="text-electric underline" href={site.phoneHref}>{site.phoneDisplay}</a>.
        </p>
      </Section>

      <Section title="2. Acceptance">
        <p>
          By using the site, including submitting an enquiry, you agree to these terms and to our{" "}
          <Link className="text-electric underline" href="/privacy">Privacy Policy</Link>. If you use the site for a
          business, you confirm that you have authority to bind that business. If you do not agree, do not use the
          site.
        </p>
        <p>
          If you are a consumer, nothing in these terms removes rights that the Consumer Rights Act 2015, or any other
          law, says cannot be excluded. The site is not directed at consumers shopping for household deliveries.
        </p>
      </Section>

      <Section title="3. The site is information, not a carriage contract">
        <p>
          Pages, rate descriptions, coverage times, and fleet numbers are invitations to discuss work. They are not an
          offer that you can accept merely by using the site or sending a form. A contract for logistics, fleet
          capacity, or subcontracting exists only when both sides confirm the scope, rates, dates, and any service
          levels in writing (including email).
        </p>
        <p>
          If a later written contract conflicts with these terms, the written contract prevails for that work. These
          terms continue to govern use of the site itself.
        </p>
      </Section>

      <Section title="4. Descriptions, availability, and service levels">
        <p>
          We take care to keep the site accurate, but capacity, routes, and deployment times change with volume and the
          day. Figures such as typical deployment times are operating targets, not a promised service level. Any
          service level applies only if it is written into the contract for that work.
        </p>
        <p>
          Shezuna is an independent operator. Names of carrier networks describe the type of work we are equipped to
          run. They are not a statement of official partnership, endorsement, or agency unless a written agreement says
          so. Third-party names and marks remain the property of their owners.
        </p>
      </Section>

      <Section title="5. Your responsibilities">
        <p>You agree that:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>the information you submit is true, current, and not misleading;</li>
          <li>you will not present yourself as having authority you do not have;</li>
          <li>you will not send unlawful, defamatory, or confidential third-party material without the right to do so;</li>
          <li>you will keep your own copy of anything you need a record of;</li>
          <li>you are responsible for the devices, mailboxes, and people who use the site on your organisation&apos;s behalf.</li>
        </ul>
        <p>
          A form submission is a request for contact. It does not reserve vans, guarantee a rate, or oblige us to
          offer work to a subcontractor.
        </p>
      </Section>

      <Section title="6. Acceptable use">
        <p>You must not:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>attempt to gain unauthorised access to the site, our inboxes, or our suppliers&apos; systems;</li>
          <li>probe, scan, or test the vulnerability of the site, or breach security or authentication measures;</li>
          <li>introduce malware, or overload the site, including by automated scraping or bulk form submissions;</li>
          <li>use the site to send spam or to harvest contact details;</li>
          <li>copy the site in order to build a competing service, or misrepresent your connection with Shezuna;</li>
          <li>use the site in any way that breaks UK law.</li>
        </ul>
        <p>
          We may suspend access, ignore an enquiry, or report activity to a relevant authority where we reasonably
          believe these rules have been broken.
        </p>
      </Section>

      <Section title="7. Intellectual property">
        <p>
          The site and its content, including text, layout, graphics, the Shezuna name, and the route-mark logo, are
          owned by Shezuna or its licensors. You receive a limited, revocable, non-exclusive licence to view the site
          in a browser for your internal business evaluation. You may not copy, republish, or commercialise the content
          except for a fair quotation with an acknowledgement, or where the law allows.
        </p>
        <p>
          You keep ownership of the text you submit. You grant Shezuna a non-exclusive licence to use that text for
          the purpose of responding, keeping an enquiry record, and, if we later contract, performing and administering
          that contract.
        </p>
      </Section>

      <Section title="8. Privacy and cookies">
        <p>
          Personal data is handled as described in our <Link className="text-electric underline" href="/privacy">Privacy Policy</Link>,
          which forms part of these terms. The site does not currently set non-essential cookies. Browser local storage
          is used only to remember a theme choice on your device.
        </p>
      </Section>

      <Section title="9. Liability">
        <p>
          Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, for
          fraud or fraudulent misrepresentation, or for any other liability that the law says cannot be limited or
          excluded. If you are a consumer, your statutory rights are unaffected.
        </p>
        <p>
          The site is made available free of charge. Except for the liabilities that cannot be limited, and subject to
          the reasonableness test in the Unfair Contract Terms Act 1977 where it applies:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            we are not liable for loss of profit, revenue, business, anticipated savings, goodwill, or data, or for
            indirect or consequential loss, arising out of your use of, or inability to use, the site;
          </li>
          <li>
            we are not liable for a decision you take in reliance on general site content before a written contract
            exists;
          </li>
          <li>
            our total liability arising out of or in connection with the site, whether in contract, tort (including
            negligence), or otherwise, is limited to £1,000.
          </li>
        </ul>
        <p>
          That cap applies to the website only. It does not set the liability position under a separate written
          logistics or subcontract agreement. Those terms are agreed in that document.
        </p>
        <p>
          We do not warrant that the site will be uninterrupted, error-free, or free of harmful components. We may
          withdraw or change the site without notice.
        </p>
      </Section>

      <Section title="10. Indemnity">
        <p>
          If you use the site for a business, you will indemnify Shezuna against liabilities, losses, and reasonable
          costs (including legal costs) arising from your breach of these terms, from content you submit, or from your
          infringement of a third party&apos;s rights. This indemnity does not apply to the extent the loss is caused
          by our own fraud or negligence, and it does not apply to a consumer.
        </p>
      </Section>

      <Section title="11. Changes, severance, and assignment">
        <p>
          We may update these terms by posting a new version on this page. The date at the top will change. The version
          in force when you use the site is the version that applies to that use. Continued use after a change means
          you accept the updated terms.
        </p>
        <p>
          If a court finds part of these terms unenforceable, the rest remain in force. A delay in enforcing a right is
          not a waiver of that right. You may not assign your rights under these terms. We may assign ours to a
          successor of the business.
        </p>
        <p>
          A person who is not a party to these terms has no right to enforce them under the Contracts (Rights of Third
          Parties) Act 1999.
        </p>
      </Section>

      <Section title="12. Disputes, law, and jurisdiction">
        <p>
          If you have a complaint about the site, email {site.email} with &quot;Dispute&quot; in the subject line and a
          short description of what happened. We will acknowledge the complaint within 14 days where we can, and we
          will try to resolve it with you within 30 days of that acknowledgement.
        </p>
        <p>
          These terms, and any dispute about the site, are governed by the laws of England and Wales. The courts of
          England and Wales have exclusive jurisdiction, except that we may also bring proceedings in the courts of
          the country where you operate a business, and except where the law gives a consumer the right to bring a
          claim in their local courts.
        </p>
        <p>
          Nothing in this section prevents either party from seeking urgent injunctive relief to protect confidential
          information or intellectual property.
        </p>
      </Section>
    </ArticleLayout>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="pt-6 font-display text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  );
}
