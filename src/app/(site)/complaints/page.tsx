import type { Metadata } from "next";
import PolicyLayout, {
  P,
  Ul,
  ContactBox,
  Notice,
  type PolicySection,
} from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Complaints | Revio",
  description:
    "How to make a complaint to Revio and what happens after we receive it.",
};

const NAV_LINKS = [
  { href: "#complain", label: "How to complain" },
  { href: "#include", label: "What to include" },
  { href: "#next", label: "What happens next" },
  { href: "#timeframe", label: "Response times" },
  { href: "#ombudsman", label: "Financial Ombudsman Service" },
];

const STEPS = [
  {
    num: "01",
    title: "We receive your complaint",
    desc: "We record your concerns and make sure they are sent to the right person for review.",
  },
  {
    num: "02",
    title: "We investigate",
    desc: "We review the information available and may contact you if we need anything further.",
  },
  {
    num: "03",
    title: "We respond",
    desc: "We explain the outcome of our investigation and any action we propose to take.",
  },
];

const SECTIONS: PolicySection[] = [
  {
    id: "complain",
    number: "01",
    title: "How to make a complaint",
    body: (
      <>
        <P>You can make a complaint by email, telephone or post.</P>
        <div className="mt-4 rounded-2xl border border-revio-line bg-revio-paper p-5">
          <h3 className="mb-3 text-sm font-bold text-revio-black">
            Complaints contact details
          </h3>
          <div className="grid gap-2.5 text-sm">
            <div className="flex justify-between gap-4 border-b border-revio-line pb-2.5">
              <span className="text-revio-muted">Email</span>
              <a href="mailto:complaints@revio.co.uk" className="font-semibold text-revio-black">
                complaints@revio.co.uk
              </a>
            </div>
            <div className="flex justify-between gap-4 border-b border-revio-line pb-2.5">
              <span className="text-revio-muted">Phone</span>
              <a href="tel:0207777777777" className="font-semibold text-revio-black">
                0207777777777
              </a>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-revio-muted">Post</span>
              <span className="text-right font-semibold text-revio-black">
                Revio Complaints
                <br />
                45 Circus Road
                <br />
                St John Wood
                <br />
                London
                <br />
                NW8 9JH
              </span>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "include",
    number: "02",
    title: "What to include",
    body: (
      <>
        <P>
          Giving us as much relevant information as possible will help us
          understand and investigate your complaint.
        </P>
        <P>Please include:</P>
        <Ul>
          <li>Your full name</li>
          <li>Your preferred contact details</li>
          <li>Details of the vehicle, finance application or service involved where relevant</li>
          <li>What happened and why you are unhappy</li>
          <li>Any relevant dates, documents or reference numbers</li>
          <li>What you would like us to do to resolve the matter</li>
        </Ul>
      </>
    ),
  },
  {
    id: "next",
    number: "03",
    title: "What happens next",
    body: (
      <div className="grid gap-3 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.num} className="rounded-xl border border-revio-line p-4">
            <div className="mb-2 text-lg font-black text-revio-yellow-deep">{s.num}</div>
            <strong className="mb-1 block text-sm text-revio-black">{s.title}</strong>
            <p className="text-xs leading-relaxed text-revio-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "timeframe",
    number: "04",
    title: "Response times",
    body: (
      <>
        <P>We aim to resolve complaints as quickly as possible.</P>
        <P>
          Where a complaint is covered by financial services complaint
          handling rules, we will provide a written acknowledgement and
          keep you informed of our progress where required.
        </P>
        <P>
          In general, a final response or other required written response
          will be provided within eight weeks of receiving the complaint.
        </P>
        <Notice>
          Some complaint types may be subject to different regulatory
          timescales. If this applies to your complaint, we will explain
          the relevant process to you.
        </Notice>
      </>
    ),
  },
  {
    id: "ombudsman",
    number: "05",
    title: "Financial Ombudsman Service",
    body: (
      <>
        <P>
          If your complaint relates to a regulated financial service and
          is eligible for consideration by the Financial Ombudsman
          Service, you may be able to refer your complaint to them if you
          are unhappy with our final response or if the applicable
          response period has passed.
        </P>
        <ContactBox>
          <p><strong>Financial Ombudsman Service</strong></p>
          <p>
            The Financial Ombudsman Service is an independent service that
            resolves complaints between consumers and financial
            businesses.
          </p>
          <p><strong>Website:</strong> financial-ombudsman.org.uk</p>
        </ContactBox>
        <P>
          Any final response issued by Revio for an eligible complaint
          will explain whether you can refer the matter to the Financial
          Ombudsman Service and the relevant time limit for doing so.
        </P>
      </>
    ),
  },
];

export default function ComplaintsPage() {
  return (
    <PolicyLayout
      kicker="Complaints"
      title="How to make a complaint."
      description="If you are unhappy with a service you have received from Revio, please tell us. We will review your concerns and aim to resolve them fairly."
      navLinks={NAV_LINKS}
      sections={SECTIONS}
    />
  );
}
