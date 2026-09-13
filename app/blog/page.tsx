import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Wellness Blog",
  description:
    "Practical articles from VYANA Wellness about nutrition, lifestyle, metabolic health, yoga, stress, sleep, and preventive wellness.",
};

const plannedTopics = [
  "Nutrition & Healthy Eating",
  "Metabolic Health",
  "Gut Health",
  "Women's Wellness",
  "Weight Management",
  "Yoga & Stress",
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-vyana-cream px-6 pb-24 pt-40 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
              Wellness Journal
            </p>

            <h1 className="mt-5 max-w-4xl font-serif text-5xl text-vyana-dark sm:text-6xl">
              Practical knowledge for healthier living.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              Evidence-informed wellness education designed to help you better
              understand the habits that shape your health.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {plannedTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-3xl bg-vyana-cream p-8"
                >
                  <div className="mb-10 h-2 w-2 rounded-full bg-vyana-green" />

                  <h2 className="font-serif text-2xl text-vyana-dark">
                    {topic}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Articles coming soon.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}