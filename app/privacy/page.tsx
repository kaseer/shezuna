import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArticleLayout } from "@/src/components/sections/article-layout";
import { pageMetadata, pages } from "@/src/lib/seo";
import { site } from "@/src/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(pages.privacy);
}

const updated = "10 October 2026";

export default function PrivacyPage() {
  return (
    <ArticleLayout eyebrow="Legal" title="Privacy Policy" showCta={false}>
      <p className="text-sm text-ink">Last updated: {updated}</p>
      <p>
        This policy explains how Shezuna ({site.address}) collects and uses personal data when you use {site.url}. It is
        written to meet the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. It also
        covers the Privacy and Electronic Communications Regulations 2003 (PECR), which govern cookies and similar
        technologies.
      </p>

      <Section title="1. Who is responsible for your data">
        <p>
          Shezuna is the data controller for personal data collected through this website and our enquiry desk. You can
          contact us at <a className="text-electric underline" href={`mailto:${site.email}`}>{site.email}</a>, by phone
          on <a className="text-electric underline" href={site.phoneHref}>{site.phoneDisplay}</a>, or by post at{" "}
          {site.address}.
        </p>
        <p>
          We have not appointed a statutory data protection officer. UK GDPR only requires one where core activities
          involve large-scale monitoring or large-scale processing of special category data. Privacy questions should be
          sent to the email address above, with &quot;Privacy&quot; in the subject line.
        </p>
      </Section>

      <Section title="2. The data we collect">
        <p>We only collect what we need to answer an enquiry and to run this website.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold text-ink">Enquiry details.</span> Name, email address, phone number, company
            name, role (client or subcontractor), region, and the message you send. A hidden field is used only to
            detect automated spam and is discarded.
          </li>
          <li>
            <span className="font-semibold text-ink">Technical data.</span> IP address and basic request data used to
            rate-limit the contact form and to protect the site from abuse. Our host may also process standard server
            logs.
          </li>
          <li>
            <span className="font-semibold text-ink">Usage data.</span> Cookieless page-view and interaction events,
            such as which page was viewed. These events are not used to identify you by name.
          </li>
          <li>
            <span className="font-semibold text-ink">Display preference.</span> If you choose a colour theme, we store
            that choice in your browser&apos;s local storage under the key &quot;shezuna-theme&quot;. That is not a
            cookie and it does not leave your device.
          </li>
        </ul>
        <p>
          Please do not send special category data (such as health, ethnicity, or biometric data) or information about
          criminal offences. The form is not designed for that information. If you include it, we will delete it unless
          we have a legal duty to keep it.
        </p>
        <p>This website is aimed at businesses. We do not knowingly collect personal data from children.</p>
      </Section>

      <Section title="3. How we use personal data and our lawful bases">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold text-ink">To respond to you.</span> We use enquiry details to reply, assess
            capacity, and discuss rates or onboarding. The lawful basis is steps taken at your request before entering
            a contract (UK GDPR Article 6(1)(b)) and our legitimate interests in handling genuine business enquiries
            (Article 6(1)(f)).
          </li>
          <li>
            <span className="font-semibold text-ink">To keep records of a later contract.</span> If we go on to work
            together, we keep the records needed to perform that contract and to meet tax, accounting, and insurance
            duties (Articles 6(1)(b) and 6(1)(c)).
          </li>
          <li>
            <span className="font-semibold text-ink">To protect the website.</span> We use IP addresses and form
            activity to limit abusive traffic. The lawful basis is our legitimate interests in keeping the site
            available and secure (Article 6(1)(f)).
          </li>
          <li>
            <span className="font-semibold text-ink">To understand how the site is used.</span> Cookieless analytics
            help us see which pages are useful. The lawful basis is our legitimate interests in maintaining and
            improving the site (Article 6(1)(f)). You can block analytics with your browser or an extension.
          </li>
        </ul>
        <p>
          We do not sell personal data. We do not use it for automated decisions that produce legal or similarly
          significant effects, and we do not build marketing profiles from the enquiry form.
        </p>
      </Section>

      <Section title="4. Who we share data with">
        <p>We share personal data only with people and suppliers who need it for the purposes above.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Shezuna staff who handle operations and enquiries.</li>
          <li>
            Resend, our email delivery provider, which transmits the enquiry to our operations inbox. Resend acts as
            our processor for that delivery.
          </li>
          <li>
            Vercel, which hosts this website and provides cookieless analytics. Vercel processes technical and usage
            data as our processor for hosting and measurement.
          </li>
          <li>
            Professional advisers, insurers, or authorities where we must disclose information to comply with the law,
            to establish or defend a legal claim, or to protect someone&apos;s vital interests.
          </li>
        </ul>
        <p>
          A separate written logistics contract may require us to share operational contact details with a carrier or
          depot. That sharing is governed by that contract, not by a casual visit to this website.
        </p>
      </Section>

      <Section title="5. International transfers">
        <p>
          Shezuna is based in the United Kingdom. Some of our suppliers, including hosting and email delivery, may
          process personal data in the United States or another country that does not have a UK adequacy regulation.
        </p>
        <p>
          Where that happens, we put in place a transfer safeguard required by UK GDPR Chapter V. That is normally the
          UK International Data Transfer Agreement, or the EU Standard Contractual Clauses plus the UK Addendum, with
          any extra measures the transfer risk requires. You can ask us for a summary of those safeguards.
        </p>
      </Section>

      <Section title="6. How long we keep data">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Unsuccessful or unanswered enquiries: up to 24 months after our last contact with you, so we can deal with
            follow-up questions and show what was discussed.
          </li>
          <li>
            Enquiries that become a contract: for the life of that contract and then for up to six years, which is the
            usual period for bringing a contract claim in England and Wales, or longer if a tax or regulatory rule
            requires it.
          </li>
          <li>Security logs used for rate limiting: for a short period, measured in minutes for the live limit, and no longer than 12 months for host logs.</li>
          <li>Theme preference: on your device until you clear site data or change the setting.</li>
        </ul>
        <p>When a retention period ends, we delete the data or anonymise it so that it no longer identifies you.</p>
      </Section>

      <Section title="7. Cookies and similar technologies">
        <p>
          PECR requires clear information about cookies and, for cookies that are not strictly necessary, your consent
          before they are set.
        </p>
        <p>
          This website does not currently set analytics, advertising, or other non-essential cookies. Vercel Web
          Analytics, as we use it, does not use a cookie to identify you. The theme control uses local storage, which
          stays on your device and is not sent to us as a cookie.
        </p>
        <p>
          If we introduce a non-essential cookie later, we will update this policy and ask for consent before that
          cookie is stored. You can also control cookies in your browser settings. Blocking strictly necessary
          technical storage may stop parts of the site from remembering your theme.
        </p>
      </Section>

      <Section title="8. Security">
        <p>
          We use HTTPS, access limits on the operations inbox, and a rate limit on the contact form. No method of
          transmission or storage is completely secure. If we become aware of a personal data breach that is likely to
          result in a risk to you, we will notify the ICO and, where the law requires it, the people affected.
        </p>
      </Section>

      <Section title="9. Your rights">
        <p>Under the UK GDPR you can ask us to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>confirm whether we process your personal data and to have a copy of it;</li>
          <li>correct inaccurate data;</li>
          <li>delete data in the situations the UK GDPR allows;</li>
          <li>restrict processing in the situations the UK GDPR allows;</li>
          <li>receive data you provided to us, in a portable format, where the basis is contract and the processing is automated;</li>
          <li>object to processing based on legitimate interests;</li>
          <li>complain to a supervisory authority.</li>
        </ul>
        <p>
          We will respond within one month. We may extend that by up to two further months for a complex or numerous
          request, and we will tell you if we do. We may ask for information to confirm your identity before we
          release data. There is no fee unless a request is manifestly unfounded or excessive.
        </p>
        <p>
          You can complain to the Information Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire,
          SK9 5AF, at ico.org.uk or on 0303 123 1113. We would appreciate the chance to put things right first.
        </p>
      </Section>

      <Section title="10. Changes to this policy">
        <p>
          We will post any change on this page and update the date above. If a change materially affects how we use
          enquiry data, we will also tell the people we are still in contact with, where we have their details and it
          is reasonable to do so.
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
