import Link from "next/link";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import About from "./components/About";
import Services from "./components/Services";
import Conditions from "./components/Conditions";
import Approach from "./components/Approach";
import BrandBanner from "./components/BrandBanner";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      {/* NAVRATRI WEBINAR ANNOUNCEMENT */}
      <section
        aria-label="Upcoming Navratri webinar"
        className="border-y border-[#D9BD78]/30 bg-[#234D36] px-5 py-5 text-center sm:px-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-5">
          <span className="rounded-full border border-[#D9BD78]/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D9BD78]">
            Upcoming Webinar
          </span>

          <p className="text-sm leading-6 text-white sm:text-base">
            Therapeutic Fasting During Navratri
            <span className="mx-2 hidden text-[#D9BD78] sm:inline">
              |
            </span>
            <span className="block text-white/80 sm:inline">
              4 October 2026 · 6:00 PM IST
            </span>
          </p>

          <Link
            href="/webinar/navratri-2026#register"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D9BD78] underline decoration-[#D9BD78]/50 underline-offset-4 transition hover:text-white"
          >
            Register Now
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <Pillars />

      <About />

      <Services />

      <Conditions />

      <Approach />

      <BrandBanner />

      <BookingCTA />

      <Footer />
    </main>
  );
}