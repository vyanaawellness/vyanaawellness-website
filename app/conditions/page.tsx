import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Supported",
  description:
    "Learn about the health and wellness areas supported by VYANA Wellness through personalized lifestyle guidance.",
};

const conditions = [
  "Obesity",
  "Diabetes & Prediabetes",
  "Fatty Liver",
  "Digestive Issues",
  "PCOS",
  "Hypothyroidism",
  "Metabolic Syndrome",
  "Stress & Anxiety",
  "Sleep Disorders",
  "Hypertension",
];

export default function ConditionsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-vyana-green text-white vyana-section">
          <div className="vyana-gutter mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-sage">
              Conditions Supported
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl sm:text-6xl">
              Lifestyle support for better long-term health.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Lifestyle, nutrition, sleep, stress, and movement can play an
              important role in overall wellbeing and many chronic health
              concerns.
            </p>
          </div>
        </section>

        <section className="bg-white vyana-section">
          <div className="mx-auto max-w-7xl vyana-gutter">
            <div className="grid gap-5 sm:grid-cols-2">
              {conditions.map((condition) => (
                <div
                  key={condition}
                  className="rounded-2xl bg-vyana-cream px-7 py-6"
                >
                  <p className="font-serif text-2xl text-vyana-dark">
                    {condition}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-3xl border border-vyana-sage/40 vyana-panel">
              <h2 className="font-serif text-3xl text-vyana-dark">
                An important note
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                VYANA Wellness provides lifestyle and wellness support and is
                not a substitute for emergency care or necessary diagnosis,
                treatment, medication, or follow-up with your physician or
                other qualified healthcare professional.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/book"
                className="inline-block rounded-full bg-vyana-green px-8 py-4 text-sm font-semibold text-white"
              >
                Discuss Your Wellness Goals
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}