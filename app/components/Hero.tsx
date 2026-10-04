export default function Hero() {
  return (
    <section className="vyana-video-hero">
      {/* =====================================================
          REAL BOTANICAL VIDEO BACKGROUND
         ===================================================== */}
      <video
        className="vyana-video-hero-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/vyana-hero-botanical.png"
        aria-hidden="true"
      >
        <source
          src="/videos/vyana-hero-botanical.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          LEFT-SIDE READABILITY GRADIENT
         ===================================================== */}
      <div
        className="vyana-video-hero-overlay"
        aria-hidden="true"
      />

      {/* =====================================================
          SUBTLE WARM VYANA LIGHT
         ===================================================== */}
      <div
        className="vyana-video-hero-warmth"
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT
         ===================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl vyana-section vyana-gutter">
        <div className="max-w-[650px]">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
            Holistic Wellness · Sustainable Health
          </p>

          <h1 className="font-serif text-5xl leading-[1.08] text-vyana-dark sm:text-6xl lg:text-7xl">
            Restore Your

            <span className="block text-vyana-green">
              Inner Rhythm.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
            Personalized naturopathic and lifestyle-based wellness support to
            help you build healthier habits, prevent disease, and thrive with
            greater balance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/book"
              className="rounded-full bg-vyana-green px-7 py-4 text-center text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              Book a Consultation
            </a>

            <a
              href="#about"
              className="rounded-full border border-vyana-green bg-vyana-cream/60 px-7 py-4 text-center text-sm font-semibold text-vyana-green backdrop-blur-sm transition duration-300 hover:bg-vyana-green hover:text-white"
            >
              Discover VYANA
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          ORGANIC TRANSITION INTO NEXT SECTION
         ===================================================== */}
      <div
        className="vyana-hero-organic-transition"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="
              M0,100
              C160,125 310,140 465,112
              C620,84 720,34 885,47
              C1045,60 1150,119 1440,72
              L1440,150
              L0,150
              Z
            "
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}