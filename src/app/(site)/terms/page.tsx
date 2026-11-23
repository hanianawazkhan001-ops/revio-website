import type { Metadata } from "next";
import PolicyLayout, {
  P,
  Ul,
  ContactBox,
  type PolicySection,
} from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Revio",
  description:
    "The basis on which you may use the Revio website and the services available through it.",
};

const NAV_LINKS = [
  { href: "#acceptance", label: "Acceptance of these terms" },
  { href: "#about", label: "About Revio" },
  { href: "#information", label: "Information on the website" },
  { href: "#vehicles", label: "Vehicles listed on Revio" },
  { href: "#cash", label: "Cash enquiries and purchases" },
  { href: "#finance", label: "Finance services" },
  { href: "#estimates", label: "Finance estimates" },
  { href: "#selling", label: "Sell Your Car" },
  { href: "#your-info", label: "Information you provide" },
  { href: "#use", label: "Your use of the website" },
  { href: "#third-party", label: "Third party services" },
  { href: "#intellectual", label: "Intellectual property" },
  { href: "#availability", label: "Website availability" },
  { href: "#liability", label: "Liability" },
  { href: "#privacy", label: "Privacy and cookies" },
  { href: "#changes", label: "Changes to these terms" },
  { href: "#law", label: "Governing law" },
  { href: "#contact", label: "Contact us" },
];

const SECTIONS: PolicySection[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of these terms",
    body: (
      <>
        <P>These are the website terms and conditions of Revio.</P>
        <P>
          By accessing or using the Revio website, you agree to these
          Terms &amp; Conditions together with our Privacy Policy and any
          other terms that apply to a particular service you choose to use.
        </P>
        <P>
          If you do not agree with these terms, you should not use the
          website or submit information through it.
        </P>
      </>
    ),
  },
  {
    id: "about",
    number: "02",
    title: "About Revio",
    body: (
      <>
        <P>
          Revio provides an automotive platform where customers can search
          for vehicles, make vehicle enquiries, apply for vehicle finance
          and submit their current vehicle for valuation and offers.
        </P>
        <P>
          The exact role Revio performs depends on the service being used.
          Vehicles displayed on the website are generally supplied by
          partner dealerships and Revio does not own those vehicles unless
          expressly stated otherwise.
        </P>
      </>
    ),
  },
  {
    id: "information",
    number: "03",
    title: "Information on our website",
    body: (
      <>
        <P>
          We take reasonable care to ensure that information displayed on
          the website is accurate and useful. However, vehicle information,
          prices, specifications, availability, finance illustrations and
          other content may be supplied by dealerships, data providers or
          other third parties.
        </P>
        <P>
          Information on the website is provided as a guide and may change
          without notice.
        </P>
        <P>
          You should confirm any information that is important to your
          decision before entering into a purchase, finance agreement or
          other transaction.
        </P>
      </>
    ),
  },
  {
    id: "vehicles",
    number: "04",
    title: "Vehicles listed on Revio",
    body: (
      <>
        <P>Vehicles shown on Revio may be listed by partner dealerships.</P>
        <P>
          Vehicle details may include information such as make, model,
          derivative, registration, mileage, colour, fuel type,
          transmission, specification, price, photographs and dealer
          supplied descriptions.
        </P>
        <P>
          We aim to keep listings accurate and current, but vehicles may be
          sold, reserved, removed or changed before the website is updated.
        </P>
        <P>A vehicle listing does not guarantee that the vehicle remains available.</P>
      </>
    ),
  },
  {
    id: "cash",
    number: "05",
    title: "Cash enquiries and vehicle purchases",
    body: (
      <>
        <P>
          Where you submit a cash enquiry for a vehicle, Revio will pass
          the relevant enquiry information to the dealership responsible
          for that vehicle.
        </P>
        <P>
          The dealership will contact you directly to discuss the vehicle,
          availability, price and any proposed purchase.
        </P>
        <P>
          Unless expressly stated otherwise, any contract for the purchase
          of a vehicle is entered into between you and the supplying
          dealership, not Revio.
        </P>
        <P>
          The supplying dealership is responsible for the vehicle sale, the
          vehicle itself and any obligations that arise from the purchase
          contract.
        </P>
      </>
    ),
  },
  {
    id: "finance",
    number: "06",
    title: "Finance services",
    body: (
      <>
        <P>
          Revio may provide access to vehicle finance services and may
          introduce applications to lenders or other finance partners.
        </P>
        <P>
          Finance is subject to status, lender criteria and approval.
          Submitting a Finance Check or finance application does not
          guarantee acceptance.
        </P>
        <P>
          A lender may require additional information, documents or checks
          before making a final decision.
        </P>
        <P>
          Any finance agreement offered to you will be subject to the
          lender&rsquo;s own terms and conditions. You should read those
          terms carefully before entering into an agreement.
        </P>
        <P>
          Revio does not guarantee that finance will be available, that a
          particular lender will accept an application or that a
          particular interest rate, deposit or monthly payment will be
          offered.
        </P>
      </>
    ),
  },
  {
    id: "estimates",
    number: "07",
    title: "Finance estimates and monthly payments",
    body: (
      <>
        <P>
          Monthly payment figures displayed on vehicle listings or
          elsewhere on the website may be estimates or illustrations only.
        </P>
        <P>
          An estimated monthly payment is not a finance offer and does not
          guarantee that finance will be available on those exact terms.
        </P>
        <P>
          Actual payments may differ depending on factors including the
          lender, amount financed, deposit, term, interest rate, credit
          profile, vehicle and individual circumstances.
        </P>
        <P>
          The terms shown in any formal finance agreement provided by the
          lender will take priority over any estimate displayed on the
          Revio website.
        </P>
      </>
    ),
  },
  {
    id: "selling",
    number: "08",
    title: "Sell Your Car",
    body: (
      <>
        <P>
          Revio allows customers to submit information about a vehicle in
          order to receive an estimated valuation and allow Revio to
          gather interest and offers.
        </P>
        <P>
          Any valuation displayed by Revio is an estimate only and is not
          a guaranteed offer to purchase your vehicle.
        </P>
        <P>
          Dealer offers may be higher or lower than an estimated valuation
          depending on demand, vehicle condition, specification, mileage,
          history and the accuracy of the information provided.
        </P>
        <P>
          Any offer may be subject to inspection, verification of the
          vehicle and supporting documentation.
        </P>
        <P>You are not required to accept an offer unless you separately agree to do so.</P>
        <P>
          If you accept an offer from a dealership, the vehicle sale may be
          completed directly between you and that dealership. Any
          additional terms relating to that transaction will be provided
          where applicable.
        </P>
      </>
    ),
  },
  {
    id: "your-info",
    number: "09",
    title: "Information you provide",
    body: (
      <>
        <P>
          You are responsible for ensuring that information you provide
          through Revio is accurate, complete and not misleading.
        </P>
        <P>
          This includes information supplied in vehicle enquiries, finance
          applications, Sell Your Car submissions and any other
          communication with Revio.
        </P>
        <P>
          You must not knowingly provide false information, impersonate
          another person or provide information that you are not entitled
          to provide.
        </P>
        <P>
          If information changes after you submit it, you should tell
          Revio or the relevant dealership or finance provider where the
          change may affect the service or transaction.
        </P>
      </>
    ),
  },
  {
    id: "use",
    number: "10",
    title: "Your use of our website",
    body: (
      <>
        <P>
          You must not use the Revio website in a way that is unlawful,
          fraudulent, abusive or harmful.
        </P>
        <P>In particular, you must not:</P>
        <Ul>
          <li>Attempt to gain unauthorised access to the website, systems or data</li>
          <li>Attempt to alter, delete or interfere with information you are not authorised to access</li>
          <li>Introduce viruses, malicious code or other harmful technology</li>
          <li>Attempt to overload, disrupt or damage the website or its infrastructure</li>
          <li>Use automated tools to scrape, copy or extract website content without permission</li>
          <li>Use the website to commit fraud or assist any unlawful activity</li>
          <li>Submit false, misleading or abusive enquiries</li>
        </Ul>
        <P>
          We may restrict or block access where we reasonably believe the
          website is being misused.
        </P>
      </>
    ),
  },
  {
    id: "third-party",
    number: "11",
    title: "Third party websites and services",
    body: (
      <>
        <P>
          Revio may use or link to services operated by third parties,
          including dealerships, finance providers, credit reference
          agencies, technology providers, mapping providers and other
          external services.
        </P>
        <P>These third parties may have their own terms, privacy notices and policies.</P>
        <P>
          Revio is not responsible for the content, security, availability
          or operation of a third party website or service that is outside
          our control.
        </P>
      </>
    ),
  },
  {
    id: "intellectual",
    number: "12",
    title: "Intellectual property",
    body: (
      <>
        <P>
          The Revio name, branding, website design, text, graphics,
          software and other content owned by Revio are protected by
          intellectual property laws.
        </P>
        <P>
          You may use the website for your own personal use. You must not
          reproduce, distribute, modify, commercially exploit or create
          derivative works from Revio owned content without permission.
        </P>
        <P>
          Vehicle photographs, dealership content, manufacturer marks and
          other third party material remain the property of their
          respective owners where applicable.
        </P>
      </>
    ),
  },
  {
    id: "availability",
    number: "13",
    title: "Website availability",
    body: (
      <>
        <P>
          We aim to keep the website available and operating correctly,
          but we do not guarantee uninterrupted or error free access.
        </P>
        <P>
          We may suspend, change or withdraw parts of the website for
          maintenance, security, technical, commercial or operational
          reasons.
        </P>
        <P>
          We are not responsible for delays or failures caused by matters
          outside our reasonable control, including communications
          failures, internet outages or third party systems.
        </P>
      </>
    ),
  },
  {
    id: "liability",
    number: "14",
    title: "Liability",
    body: (
      <>
        <P>
          Nothing in these Terms &amp; Conditions excludes or limits any
          liability that cannot lawfully be excluded or limited, including
          liability for death or personal injury caused by negligence,
          fraud or fraudulent misrepresentation.
        </P>
        <P>Nothing in these terms affects any rights you have as a consumer under applicable law.</P>
        <P>
          Subject to those protections, Revio will not be responsible for
          losses that were not reasonably foreseeable, losses arising from
          information or services supplied by third parties, or business
          losses where you use the website for commercial purposes.
        </P>
        <P>
          Revio is not responsible for the condition, quality,
          roadworthiness or description of a vehicle supplied by a
          dealership except to the extent that Revio itself has a legal
          responsibility that cannot be excluded.
        </P>
      </>
    ),
  },
  {
    id: "privacy",
    number: "15",
    title: "Privacy and cookies",
    body: (
      <>
        <P>
          Personal information submitted through Revio is handled in
          accordance with our Privacy Policy.
        </P>
        <P>
          Our Cookie Policy explains how cookies and similar technologies
          are used on the website.
        </P>
      </>
    ),
  },
  {
    id: "changes",
    number: "16",
    title: "Changes to these Terms & Conditions",
    body: (
      <>
        <P>
          We may update these Terms &amp; Conditions from time to time to
          reflect changes to our services, website, business or legal
          requirements.
        </P>
        <P>
          The latest version will be published on the Revio website and
          will show the date it was last updated.
        </P>
        <P>
          Your continued use of the website after updated terms are
          published means that the updated terms will apply to your
          subsequent use of the website.
        </P>
      </>
    ),
  },
  {
    id: "law",
    number: "17",
    title: "Governing law",
    body: (
      <>
        <P>These Terms &amp; Conditions are governed by the laws of England and Wales.</P>
        <P>
          If you are a consumer, you will retain any rights you have to
          bring proceedings in the courts available to you under
          applicable consumer law.
        </P>
        <P>
          If any part of these terms is found to be invalid or
          unenforceable, the remaining provisions will continue to apply.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    number: "18",
    title: "Contact us",
    body: (
      <>
        <P>
          If you have a question about these Terms &amp; Conditions, you
          can contact Revio using the details below.
        </P>
        <ContactBox>
          <p><strong>Phone:</strong> 0207777777777</p>
          <p><strong>Email:</strong> Contact@revio.co.uk</p>
          <p><strong>Address:</strong> 45 Circus Road, St John Wood, London, NW8 9JH</p>
        </ContactBox>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      kicker="Terms & Conditions"
      title="Terms for using Revio."
      description="These Terms & Conditions explain the basis on which you may use the Revio website and the services available through it."
      updated="Last updated 5 September 2026"
      navLinks={NAV_LINKS}
      sections={SECTIONS}
    />
  );
}
