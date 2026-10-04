import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Medicatrix Naturae – Nature's Healing Power | VYANA Wellness",
  description:
    "Explore Medicatrix Naturae, the naturopathic principle of the Healing Power of Nature, and the lifestyle foundations that support the body's natural restorative processes.",
};

export default function MedicatrixNaturaePage() {
  return (
    <>
      <Header />

      <main>
        {/* Article Hero */}
        <section className="bg-vyana-cream vyana-section">
          <div className="vyana-gutter mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="text-sm font-semibold text-vyana-green transition hover:opacity-70"
            >
              ← Back to Wellness Journal
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
              Naturopathic Principles
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-tight text-vyana-dark sm:text-6xl lg:text-7xl">
              Medicatrix Naturae
            </h1>

            <p className="mt-3 font-serif text-3xl italic text-vyana-green sm:text-4xl">
              Nature&apos;s Healing Power
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
              <span>Dr. Bhoomi Panchal, BNYS</span>
              <span>•</span>
              <span>VYANA Wellness</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="bg-white vyana-section">
          <div className="vyana-gutter mx-auto max-w-3xl">
            {/* Opening Quote */}
            <blockquote className="mb-10 lg:mb-12 border-l-4 border-vyana-green pl-7">
              <p className="font-serif text-2xl italic leading-relaxed text-vyana-dark sm:text-3xl">
                &ldquo;Nature alone heals. The physician merely assists the
                healing process.&rdquo;
              </p>

              <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-vyana-green">
                Fundamental Principle of Naturopathy
              </footer>
            </blockquote>

            <div className="space-y-7 text-[17px] leading-8 text-gray-700">
              <p>
                One of the most profound principles of naturopathy is{" "}
                <strong className="font-semibold text-vyana-dark">
                  Medicatrix Naturae
                </strong>
                , a Latin phrase meaning{" "}
                <strong className="font-semibold text-vyana-dark">
                  &ldquo;The Healing Power of Nature.&rdquo;
                </strong>{" "}
                This principle recognizes that the human body possesses an
                innate capacity to regulate, repair, and restore itself when
                supported by appropriate conditions.
              </p>

              <p>
                Throughout human history, healing has been observed as a
                natural biological process. A wound gradually closes, a broken
                bone repairs, and strength can return following illness. These
                processes reflect the body&apos;s remarkable ability to
                respond, adapt, and repair.
              </p>

              <p>
                Naturopathy does not suggest that nature performs miracles or
                that natural healing replaces appropriate medical care.
                Rather, it recognizes the self-regulating and restorative
                mechanisms that continually work to maintain health and
                physiological balance.
              </p>

              <p>
                From a naturopathic perspective, the practitioner&apos;s role
                is to understand the individual, identify factors that may
                interfere with health, and support the conditions in which the
                body&apos;s natural restorative processes can function
                effectively.
              </p>
            </div>

            {/* Supporting Healing */}
            <section className="mt-12 lg:mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                Everyday Foundations
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vyana-dark">
                Supporting Nature&apos;s Healing Power
              </h2>

              <p className="mt-6 text-[17px] leading-8 text-gray-700">
                The foundations of health can be supported through simple but
                meaningful lifestyle practices:
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Consuming wholesome, nutrient-rich foods",
                  "Getting adequate sleep and rest",
                  "Managing stress effectively",
                  "Engaging in regular physical activity",
                  "Maintaining healthy relationships",
                  "Spending time in nature",
                  "Supporting adequate hydration and healthy digestion",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl bg-vyana-cream p-5"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-vyana-green" />
                    <span className="leading-7 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[17px] leading-8 text-gray-700">
                When these foundations are consistently supported, they can
                contribute to overall health, resilience, recovery, and
                well-being.
              </p>
            </section>

            {/* VYANA Perspective */}
            <section className="rounded-[2rem] bg-vyana-cream vyana-panel mt-12 lg:mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                The VYANA Perspective
              </p>

              <h2 className="mt-4 font-serif text-3xl text-vyana-dark">
                Restore. Prevent. Thrive.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-700">
                At VYANA Wellness, we believe sustainable health begins by
                understanding the body rather than simply reacting to
                symptoms. By combining naturopathic principles with
                individualized lifestyle guidance, our goal is to help people
                create the conditions that support long-term health, balance,
                and well-being.
              </p>
            </section>

            {/* Consultation CTA */}
            <section className="mt-12 lg:mt-16 border-y border-gray-200 text-center vyana-section">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                Personalized Wellness
              </p>

              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl text-vyana-dark">
                Looking for guidance tailored to your wellness journey?
              </h2>

              <Link
                href="/book"
                className="mt-8 inline-flex rounded-full bg-vyana-green px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book a Consultation
              </Link>
            </section>

            {/* Disclaimer */}
            <p className="mt-12 text-sm italic leading-6 text-gray-500">
              This article is intended for general educational purposes and
              does not constitute medical advice, diagnosis, or treatment.
              Individual health needs vary, and appropriate medical care
              should be sought when needed.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
