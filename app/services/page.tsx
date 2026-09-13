import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore personalized wellness services from VYANA Wellness including lifestyle assessment, diet planning, weight management, metabolic health support, yoga, and stress management.",
};

const services = [
  {
    title: "Online Consultation",
    description:
      "Personalized wellness guidance delivered remotely, allowing you to receive support from wherever you are.",
  },
  {
    title: "Lifestyle Assessment",
    description:
      "A comprehensive review of nutrition, sleep, activity, stress, routines, and other lifestyle factors.",
  },
  {
    title: "Personalized Diet Planning",
    description:
      "Practical nutrition guidance designed around your goals, preferences, routine, and lifestyle.",
  },
  {
    title: "Weight Management Program",
    description:
      "A sustainable approach to weight management focused on lifestyle habits rather than short-term fixes.",
  },
  {
    title: "Diabetes & Metabolic Health Support",
    description:
      "Lifestyle-focused guidance designed to support healthier metabolic habits alongside appropriate medical care.",
  },
  {
    title: "Fatty Liver Management",
    description:
      "Nutrition, movement, and lifestyle guidance designed to support healthier metabolic and liver-related habits.",
  },
  {
    title: "Yoga & Stress Management",
    description:
      "Yoga, relaxation, breathing, and lifestyle strategies to support stress management and overall wellbeing.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-vyana-cream px-6 pb-24 pt-40 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
              Services
            </p>

            <h1 className="mt-5 max-w-4xl font-serif text-5xl text-vyana-dark sm:text-6xl">
              Personalized wellness support designed around you.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              Every individual is different. VYANA Wellness focuses on
              practical recommendations that fit your lifestyle, goals, and
              circumstances.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-3xl border border-gray-100 p-8 transition hover:border-vyana-sage hover:bg-vyana-cream"
              >
                <span className="text-sm font-semibold text-vyana-green">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 font-serif text-3xl text-vyana-dark">
                  {service.title}
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-vyana-green py-24 text-center text-white">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-4xl sm:text-5xl">
              Not sure where to begin?
            </h2>

            <p className="mt-6 leading-7 text-white/80">
              Start with an initial consultation to discuss your health goals
              and determine which approach may be most suitable for you.
            </p>

            <Link
              href="/book"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-vyana-green"
            >
              Book Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}