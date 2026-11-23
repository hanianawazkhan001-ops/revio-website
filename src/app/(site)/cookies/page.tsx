import type { Metadata } from "next";
import PolicyLayout, {
  P,
  Ul,
  ContactBox,
  Notice,
  type PolicySection,
} from "@/components/policy/PolicyLayout";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookie Policy | Revio",
  description:
    "How Revio uses cookies and similar technologies on our website, why we use them and the choices available to you.",
};

const NAV_LINKS = [
  { href: "#what", label: "What cookies are" },
  { href: "#why", label: "Why we use cookies" },
  { href: "#types", label: "Types of cookies" },
  { href: "#consent", label: "Cookie consent" },
  { href: "#analytics", label: "Analytics" },
  { href: "#advertising", label: "Advertising" },
  { href: "#thirdparty", label: "Third party technologies" },
  { href: "#duration", label: "How long cookies last" },
  { href: "#settings", label: "Managing cookies" },
  { href: "#changes", label: "Changes to this policy" },
  { href: "#contact", label: "Contact us" },
];

const COOKIE_TYPES = [
  {
    tag: "Required",
    title: "Strictly necessary",
    desc: "These cookies are needed for the website to operate, protect security, remember privacy choices or provide a service you have requested.",
  },
  {
    tag: "Optional",
    title: "Analytics",
    desc: "These help us understand how visitors use the website, which pages are viewed and how the website performs.",
  },
  {
    tag: "Optional",
    title: "Functionality",
    desc: "These can remember choices or support additional website features that are not essential to the basic operation of the website.",
  },
  {
    tag: "Optional",
    title: "Advertising",
    desc: "These may be used to measure advertising, understand campaign performance and provide advertising that is more relevant to you.",
  },
];

const SECTIONS: PolicySection[] = [
  {
    id: "what",
    number: "01",
    title: "What are cookies?",
    body: (
      <>
        <P>
          Cookies are small files that are stored on your device when you
          visit a website. They can be used to remember information about
          your visit, recognise your device, remember preferences and help
          a website operate correctly.
        </P>
        <P>
          Similar technologies can also store or access information on
          your device. This can include pixels, tags, local storage and
          other technologies used for website functionality, analytics and
          advertising.
        </P>
      </>
    ),
  },
  {
    id: "why",
    number: "02",
    title: "Why Revio uses cookies",
    body: (
      <>
        <P>We may use cookies and similar technologies to:</P>
        <Ul>
          <li>Keep the website working correctly and securely</li>
          <li>Remember your cookie choices and website preferences</li>
          <li>Understand how visitors use Revio</li>
          <li>Measure website performance</li>
          <li>Understand how customers arrive at Revio</li>
          <li>Measure enquiries, finance applications and other website actions</li>
          <li>Improve the website and customer journey</li>
          <li>Measure the effectiveness of advertising</li>
          <li>Provide relevant advertising where you have agreed to advertising cookies</li>
        </Ul>
      </>
    ),
  },
  {
    id: "types",
    number: "03",
    title: "Types of cookies we may use",
    body: (
      <div className="grid gap-3 sm:grid-cols-2">
        {COOKIE_TYPES.map((c) => (
          <div key={c.title} className="rounded-xl border border-revio-line p-4">
            <span className="mb-2 inline-block rounded-full bg-revio-paper px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-revio-muted">
              {c.tag}
            </span>
            <h3 className="mb-1 text-sm font-bold text-revio-black">{c.title}</h3>
            <p className="text-xs leading-relaxed text-revio-muted">{c.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "consent",
    number: "04",
    title: "Cookie consent",
    body: (
      <>
        <P>
          Cookies that are strictly necessary for the website or a service
          you request may be used without asking for your consent.
        </P>
        <P>
          Where consent is required, Revio will ask for your permission
          before using non essential cookies or similar technologies.
        </P>
        <P>
          You can choose which optional cookie categories you accept and
          you can change your choices later.
        </P>
        <Notice>
          Continuing to browse the website on its own is not treated as
          consent to optional cookies.
        </Notice>
      </>
    ),
  },
  {
    id: "analytics",
    number: "05",
    title: "Analytics and website measurement",
    body: (
      <>
        <P>
          Revio may use analytics technologies to understand how the
          website is being used and how well it performs.
        </P>
        <P>
          This can include information such as pages viewed, time spent on
          the website, device and browser information, approximate
          location, referral source and actions taken on the website.
        </P>
        <P>
          Where the use of an analytics technology requires consent, it
          will only be activated after you have provided that consent.
        </P>
      </>
    ),
  },
  {
    id: "advertising",
    number: "06",
    title: "Advertising and campaign measurement",
    body: (
      <>
        <P>
          Revio may use advertising technologies to understand whether an
          advert resulted in a visit, enquiry, finance application, vehicle
          submission or another relevant action.
        </P>
        <P>
          Advertising technologies may also be used to create or reach
          audiences on third party advertising platforms.
        </P>
        <P>
          Where cookies, pixels or similar technologies are used for
          advertising purposes, they will only be activated where the
          required consent has been provided.
        </P>
        <P>
          Rejecting advertising cookies does not mean that you will stop
          seeing advertising. It means that advertising is less likely to
          be based on information collected through Revio.
        </P>
      </>
    ),
  },
  {
    id: "thirdparty",
    number: "07",
    title: "Third party cookies and technologies",
    body: (
      <>
        <P>
          Some features of the Revio website may be provided by third
          parties. This can include analytics providers, advertising
          platforms, embedded content, maps, finance technology and
          security services.
        </P>
        <P>
          These providers may set or access cookies and similar
          technologies where permitted by your choices and applicable law.
        </P>
        <P>
          Third party providers may process information under their own
          privacy and cookie policies. Revio does not control how a third
          party uses information once you leave our website or interact
          directly with that provider.
        </P>
      </>
    ),
  },
  {
    id: "duration",
    number: "08",
    title: "How long cookies last",
    body: (
      <>
        <P>Cookies can be session cookies or persistent cookies.</P>
        <P><strong className="text-revio-black">Session cookies</strong> normally expire when you close your browser.</P>
        <P><strong className="text-revio-black">Persistent cookies</strong> remain on your device for a set period or until you delete them.</P>
        <P>The duration of an individual cookie depends on its purpose and the provider that sets it.</P>
        <P>
          The current cookies and technologies used on the live Revio
          website should be shown through our cookie settings tool
          together with the relevant category and duration where
          available.
        </P>
      </>
    ),
  },
  {
    id: "settings",
    number: "09",
    title: "Managing your cookie choices",
    body: (
      <>
        <P>
          You can accept, reject or manage optional cookies through the
          cookie controls provided on the Revio website.
        </P>
        <P>
          You can change your choices at any time. Changing your choice
          will not affect processing that took place before the change.
        </P>
        <div className="mt-4 rounded-2xl border border-revio-line bg-revio-paper p-5">
          <h3 className="mb-1 text-sm font-bold text-revio-black">Cookie Settings</h3>
          <p className="mb-3 text-xs text-revio-muted">
            Use the cookie settings control on the live website to review
            or change your choices.
          </p>
          <CookieSettingsButton />
        </div>
        <h3 className="mb-2 mt-5 text-base font-bold text-revio-black">Browser settings</h3>
        <P>
          Most browsers also allow you to block or delete cookies. The
          method varies depending on the browser and device you use.
        </P>
        <P>
          Blocking strictly necessary cookies may prevent parts of the
          website from operating correctly.
        </P>
      </>
    ),
  },
  {
    id: "changes",
    number: "10",
    title: "Changes to this Cookie Policy",
    body: (
      <>
        <P>
          We may update this Cookie Policy when the technologies used on
          Revio change or when legal requirements change.
        </P>
        <P>
          The latest version will be published on the Revio website with
          the date it was last updated.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    number: "11",
    title: "Contact us",
    body: (
      <>
        <P>
          If you have a question about this Cookie Policy or how Revio
          uses cookies, you can contact us using the details below.
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

export default function CookiesPage() {
  return (
    <PolicyLayout
      kicker="Cookie Policy"
      title="How Revio uses cookies."
      description="This Cookie Policy explains how Revio uses cookies and similar technologies on our website, why we use them and the choices available to you."
      updated="Last updated 5 September 2026"
      navLinks={NAV_LINKS}
      sections={SECTIONS}
    />
  );
}
