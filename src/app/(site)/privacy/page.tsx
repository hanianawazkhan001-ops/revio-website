import type { Metadata } from "next";
import PolicyLayout, {
  P,
  Ul,
  ContactBox,
  type PolicySection,
} from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Revio",
  description:
    "How Revio collects, uses, stores and shares personal information when you use our website and services.",
};

const NAV_LINKS = [
  { href: "#who", label: "Who we are" },
  { href: "#collect", label: "Information we collect" },
  { href: "#use", label: "How we use information" },
  { href: "#finance", label: "Finance applications" },
  { href: "#buying", label: "Buying a car" },
  { href: "#selling", label: "Selling your car" },
  { href: "#share", label: "Who we share information with" },
  { href: "#marketing", label: "Marketing" },
  { href: "#retention", label: "How long we keep information" },
  { href: "#rights", label: "Your rights" },
  { href: "#security", label: "Security" },
  { href: "#complaints", label: "Complaints" },
  { href: "#changes", label: "Changes to this policy" },
];

const RIGHTS = [
  ["Access", "Ask for a copy of personal information we hold about you."],
  ["Rectification", "Ask us to correct inaccurate or incomplete information."],
  ["Erasure", "Ask us to delete information where the law gives you that right."],
  ["Restriction", "Ask us to restrict how information is used in certain circumstances."],
  ["Object", "Object to certain uses of your information, including direct marketing."],
  [
    "Data portability",
    "Request certain information in a structured and commonly used electronic format where this right applies.",
  ],
  ["Withdraw consent", "Withdraw consent at any time where consent is the lawful basis."],
  [
    "Automated decisions",
    "Ask about certain decisions made solely by automated means where applicable.",
  ],
];

const SECTIONS: PolicySection[] = [
  {
    id: "who",
    number: "01",
    title: "Who we are",
    body: (
      <>
        <P>
          Revio provides an automotive marketplace, vehicle finance services
          and a service that allows customers to submit vehicles for
          valuation and offers.
        </P>
        <P>
          For the personal information that Revio determines how and why to
          use, Revio acts as the data controller.
        </P>
        <ContactBox>
          <p><strong>Phone:</strong> 0207777777777</p>
          <p><strong>Email:</strong> Contact@revio.co.uk</p>
          <p><strong>Address:</strong> 45 Circus Road, St John Wood, London, NW8 9JH</p>
          <p><strong>ICO registration:</strong> ZB523978</p>
        </ContactBox>
      </>
    ),
  },
  {
    id: "collect",
    number: "02",
    title: "Information we collect",
    body: (
      <>
        <P>
          The information we collect depends on which Revio service you use.
          It may include:
        </P>
        <Ul>
          <li>Name, date of birth and contact details</li>
          <li>Current and previous residential information</li>
          <li>Employment, income and financial information</li>
          <li>Bank details where required for a finance application or transaction</li>
          <li>
            Vehicle registration, mileage, specification, condition, service
            history and photographs
          </li>
          <li>
            Information about damage, warning lights, outstanding finance
            and vehicle ownership
          </li>
          <li>Finance application information and lender responses</li>
          <li>Communications with Revio</li>
          <li>Marketing preferences</li>
          <li>Device, browser, IP address and website usage information</li>
          <li>
            Information supplied by dealerships, lenders, finance platforms
            and other service providers where relevant to your enquiry
          </li>
        </Ul>
        <P>
          We aim to collect only the information that is reasonably required
          for the service you are using.
        </P>
      </>
    ),
  },
  {
    id: "use",
    number: "03",
    title: "How and why we use your information",
    body: (
      <>
        <P>We may use personal information to:</P>
        <Ul>
          <li>Provide the service you have requested</li>
          <li>Process finance applications and check finance eligibility</li>
          <li>Send vehicle enquiries to the dealership selling a vehicle</li>
          <li>Provide estimated vehicle valuations</li>
          <li>
            Share relevant vehicle information with selected dealerships
            when you submit your car for offers
          </li>
          <li>
            Contact you about your application, enquiry, valuation or
            vehicle sale
          </li>
          <li>Prevent fraud and verify identity</li>
          <li>Meet legal, accounting and regulatory requirements</li>
          <li>Operate, protect and improve our website and services</li>
          <li>
            Send marketing where permitted by law and in line with your
            preferences
          </li>
        </Ul>
        <h3 className="mb-2 mt-5 text-base font-bold text-revio-black">
          Our lawful bases
        </h3>
        <P>
          The lawful basis we rely on depends on why we are using your
          information. This may include processing that is necessary to
          provide a service you have requested or to take steps at your
          request before entering into a contract, complying with legal
          obligations, pursuing legitimate business interests where your
          rights do not override those interests, and consent where consent
          is appropriate.
        </P>
        <P>Where we rely on consent, you can withdraw that consent at any time.</P>
      </>
    ),
  },
  {
    id: "finance",
    number: "04",
    title: "Finance applications and credit searches",
    body: (
      <>
        <P>
          When you complete a Finance Check or finance application, we use
          the information you provide to assess and process your request
          and to identify finance options that may be available to you.
        </P>
        <P>
          Revio uses AutoConvert, provided by Blue Owl Network Ltd, as part
          of its finance and customer management technology. Information
          submitted through our finance journey may be stored and processed
          through AutoConvert and may be shared with selected lenders and
          other finance partners where necessary to process your
          application.
        </P>
        <P>
          The eligibility stage may use a soft credit search. A soft search
          does not affect your credit score and is not visible to other
          lenders in the same way as a hard credit application search.
        </P>
        <P>
          If you choose to proceed with finance, a lender may carry out
          additional searches, including a hard credit search, in
          accordance with that lender&rsquo;s own processes and privacy
          information.
        </P>
        <P>
          Credit information may also be used for identity verification,
          affordability, fraud prevention and lender eligibility checks.
        </P>
      </>
    ),
  },
  {
    id: "buying",
    number: "05",
    title: "Buying a car through Revio",
    body: (
      <>
        <P>Cars displayed on Revio are supplied by partner dealerships.</P>
        <P>
          If you submit a cash enquiry for a vehicle, we will use the
          details you provide to send your enquiry to the dealership
          selling that vehicle. This may include your name, telephone
          number, email address, message and details of the vehicle you
          selected.
        </P>
        <P>
          The dealership will use this information to respond to your
          vehicle enquiry and discuss the car with you.
        </P>
      </>
    ),
  },
  {
    id: "selling",
    number: "06",
    title: "Selling your car through Revio",
    body: (
      <>
        <P>
          If you use Sell Your Car, we may collect vehicle details, mileage,
          condition information, photographs, service history, information
          about damage or warning lights and your contact details.
        </P>
        <P>
          We use this information to identify your vehicle, provide an
          estimated valuation, review the information supplied and gather
          interest and offers for your car.
        </P>
        <P>
          Relevant vehicle information may be shared with selected
          dealerships in the Revio network so that they can assess the
          vehicle and provide offers.
        </P>
        <P>
          We will use your contact details to communicate with you about
          the valuation, offers received and the progress of your vehicle
          submission.
        </P>
      </>
    ),
  },
  {
    id: "share",
    number: "07",
    title: "Who we may share your information with",
    body: (
      <>
        <P>Depending on the service you use, information may be shared with:</P>
        <Ul>
          <li>Partner dealerships</li>
          <li>Selected lenders and finance providers</li>
          <li>AutoConvert and other technology providers that support our services</li>
          <li>Credit reference and identity verification providers where required</li>
          <li>Fraud prevention agencies</li>
          <li>
            Professional advisers including accountants, legal advisers and
            compliance providers
          </li>
          <li>
            Regulators, law enforcement bodies or other authorities where
            required by law
          </li>
          <li>
            Other service providers acting on our instructions and
            supporting the operation of Revio
          </li>
        </Ul>
        <P>
          We expect organisations that process information on our behalf to
          protect it appropriately and use it only for the agreed purpose.
        </P>
        <P>
          Where another organisation acts as an independent data
          controller, such as a lender or dealership, its own privacy
          notice will also apply to its use of your information.
        </P>
      </>
    ),
  },
  {
    id: "marketing",
    number: "08",
    title: "Marketing",
    body: (
      <>
        <P>
          We may contact you about Revio products and services where we
          are permitted to do so by law.
        </P>
        <P>
          Where consent is required for marketing, we will ask for it
          separately. You can change your marketing preferences or
          unsubscribe at any time using the option provided in the
          communication or by contacting Revio.
        </P>
      </>
    ),
  },
  {
    id: "retention",
    number: "09",
    title: "How long we keep your information",
    body: (
      <>
        <P>
          We keep personal information only for as long as reasonably
          necessary for the purpose for which it was collected and to meet
          legal, regulatory, accounting and dispute resolution requirements.
        </P>
        <P>
          Finance and customer records may be retained for up to six years
          where required for regulatory, contractual or legal purposes.
        </P>
        <P>
          Certain accounting records may need to be retained for longer
          where required by law.
        </P>
        <P>
          Marketing information may be retained until you unsubscribe or
          object to the relevant marketing use, subject to any information
          we need to keep to record your preference.
        </P>
      </>
    ),
  },
  {
    id: "rights",
    number: "10",
    title: "Your data protection rights",
    body: (
      <>
        <P>
          Your rights depend on the circumstances and the lawful basis
          being used. These may include:
        </P>
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          {RIGHTS.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-revio-line p-4"
            >
              <strong className="block text-sm text-revio-black">
                {title}
              </strong>
              <span className="mt-1 block text-xs leading-relaxed text-revio-muted">
                {desc}
              </span>
            </div>
          ))}
        </div>
        <P>
          To exercise a data protection right, contact us using the details
          at the top of this policy. We may need to verify your identity
          before completing a request.
        </P>
      </>
    ),
  },
  {
    id: "security",
    number: "11",
    title: "How we protect your information",
    body: (
      <>
        <P>
          We use appropriate organisational and technical measures designed
          to protect personal information against unauthorised access,
          alteration, disclosure, loss or destruction.
        </P>
        <P>
          Access to personal information is limited to people and service
          providers who require it for legitimate business purposes.
        </P>
      </>
    ),
  },
  {
    id: "complaints",
    number: "12",
    title: "Complaints about your personal information",
    body: (
      <>
        <P>
          If you are concerned about how Revio has used your personal
          information, please contact us first using the details in this
          policy so that we can investigate your concern.
        </P>
        <P>
          You also have the right to complain to the Information
          Commissioner&rsquo;s Office.
        </P>
        <ContactBox>
          <p><strong>Information Commissioner&rsquo;s Office</strong></p>
          <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
          <p>Helpline: 0303 123 1113</p>
          <p>Website: ico.org.uk</p>
        </ContactBox>
      </>
    ),
  },
  {
    id: "changes",
    number: "13",
    title: "Changes to this Privacy Policy",
    body: (
      <>
        <P>
          We review this Privacy Policy regularly and may update it when
          our services, legal requirements or the way we use information
          changes.
        </P>
        <P>
          The latest version will always be published on the Revio website
          with the date it was last updated.
        </P>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PolicyLayout
      kicker="Privacy Policy"
      title="Your information and how we use it."
      description="This Privacy Policy explains how Revio collects, uses, stores and shares personal information when you use our website and services."
      updated="Last updated 5 September 2026"
      navLinks={NAV_LINKS}
      sections={SECTIONS}
    />
  );
}
