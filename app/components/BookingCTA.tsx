import Link from "next/link";

export default function BookingCTA() {
  return (
    <section id="book" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-vyana-green px-8 py-16 text-center text-white sm:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-sage">
            Your Journey Starts Here
          </p>

          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            Ready to restore your inner rhythm?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/80">
            Take the first step toward a healthier, more balanced lifestyle
            with personalized guidance from VYANA Wellness.
          </p>

          <Link
            href="/book"
            className="mt-9 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-vyana-green transition hover:bg-vyana-cream"
          >
            Book Your Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}