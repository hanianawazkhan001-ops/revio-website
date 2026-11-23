import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQs | Revio",
  description:
    "Frequently asked questions about buying, financing and selling cars with Revio.",
};

const CATEGORIES = [
  {
    no: "01",
    title: "Buying a car",
    items: [
      {
        question: "Where do the cars on Revio come from?",
        answer: "Cars listed on Revio come from partner dealerships across the UK.",
      },
      {
        question: "How do I make a cash enquiry?",
        answer: (
          <>
            Choose the car you are interested in and select{" "}
            <strong>Cash Purchase</strong>. Enter your contact details and
            the dealership will receive your enquiry and get in touch to
            discuss the car and answer any questions.
          </>
        ),
      },
      {
        question: "Can I apply for finance on a car I have found on Revio?",
        answer: (
          <>
            Yes. Select <strong>Apply for Finance</strong> from the vehicle
            page and the car you have chosen will be carried into your
            finance application.
          </>
        ),
      },
    ],
  },
  {
    no: "02",
    title: "Finance",
    items: [
      {
        question: "Will the finance check affect my credit score?",
        answer: (
          <>
            <strong>No.</strong> The eligibility check uses a soft search.
          </>
        ),
      },
      {
        question: "What happens after I apply?",
        answer:
          "Once you have submitted your application, you will receive your finance application result.",
      },
      {
        question: "Do I need to have chosen a car before applying?",
        answer:
          "No. You can complete a Finance Check before choosing a car, or apply directly from a vehicle you have already selected.",
      },
    ],
  },
  {
    no: "03",
    title: "Selling your car",
    items: [
      {
        question: "What do I need to sell my car through Revio?",
        answer:
          "We will ask for your registration, mileage, vehicle condition, service history, any damage or warning lights, photos and your contact details.",
      },
      {
        question: "Is the estimated valuation a guaranteed offer?",
        answer:
          "No. The valuation is an estimate, not an offer. Actual offers may be higher or lower depending on demand, condition and the information provided.",
      },
      {
        question: "What happens after I submit my car?",
        answer: (
          <>
            Revio gathers interest and offers for your car, then contacts
            you with the best offer received. This is usually within{" "}
            <strong>2 to 4 working days</strong>.
          </>
        ),
      },
    ],
  },
  {
    no: "04",
    title: "About Revio",
    items: [
      {
        question: "What is Revio?",
        answer:
          "Revio is an automotive marketplace and car finance platform where customers can find a car, apply for finance or sell their current vehicle.",
      },
      {
        question: "Does Revio own the cars listed on the website?",
        answer:
          "No. Vehicles are listed by Revio partner dealerships. The dealership selling the vehicle remains responsible for the car itself.",
      },
      {
        question: "How can I contact Revio?",
        answer:
          "You can contact Revio through our Contact Us page for help with buying, finance, selling or a general enquiry.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-revio-line bg-gradient-to-b from-white to-[#F7F7F4] py-16 md:py-18">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 md:grid-cols-[1.15fr_.85fr] md:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[.16em] text-revio-yellow-deep">
              FAQs
            </p>
            <h1 className="mt-2 max-w-2xl text-5xl font-black leading-[0.94] tracking-tight text-revio-black md:text-[64px]">
              Frequently asked questions.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-revio-muted">
              Answers to the questions customers ask most about buying,
              financing and selling with Revio.
            </p>
          </div>
          <div className="flex min-h-[190px] flex-col justify-between rounded-[22px] bg-revio-yellow p-6 md:min-h-[250px] md:p-7">
            <strong className="text-3xl font-black leading-[0.96] tracking-tight text-revio-black md:text-[42px]">
              BUY.
              <br />
              FINANCE.
              <br />
              SELL.
            </strong>
            <p className="mt-4 text-[11px] leading-relaxed text-[#57480A]">
              Everything you need to understand how Revio works across each
              part of your car journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-[1180px] px-6">
          {CATEGORIES.map((cat) => (
            <Reveal
              key={cat.no}
              as="div"
              className="grid gap-6 border-b border-revio-line py-8 first:pt-0 last:border-b-0 md:grid-cols-[260px_1fr] md:gap-10"
            >
              <div>
                <span className="mb-2 block text-[11px] font-black tracking-[.12em] text-revio-yellow-deep">
                  {cat.no}
                </span>
                <h2 className="text-2xl font-black tracking-tight text-revio-black">
                  {cat.title}
                </h2>
              </div>
              <FaqAccordion items={cat.items} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-revio-line bg-revio-paper py-14 md:py-16">
        <Reveal
          as="div"
          className="mx-auto grid max-w-[1180px] items-center gap-6 px-6 md:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="text-[11px] font-black uppercase tracking-[.15em] text-revio-yellow-deep">
              Start with Revio
            </p>
            <h2 className="mt-1 text-4xl font-black tracking-tight text-revio-black">
              What are you looking to do?
            </h2>
          </div>
          <div className="grid gap-2 sm:flex sm:flex-wrap">
            <Link href="/cars" className="btn-tactile rounded-xl bg-revio-black px-5 py-3.5 text-center text-xs font-black text-white hover:shadow-lg">
              Find a Car
            </Link>
            <Link href="/finance" className="btn-tactile rounded-xl bg-revio-yellow px-5 py-3.5 text-center text-xs font-black text-revio-black hover:shadow-lg">
              Finance a Car
            </Link>
            <Link href="/sell" className="btn-tactile rounded-xl border border-revio-line bg-white px-5 py-3.5 text-center text-xs font-black text-revio-black hover:shadow-lg">
              Sell Your Car
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
