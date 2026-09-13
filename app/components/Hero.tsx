export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-vyana-cream">
      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-vyana-sage/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-vyana-sage/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 pb-20 pt-36 lg:grid-cols-2 lg:px-8 lg:pb-24">
        {/* Hero Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
            Holistic Wellness · Sustainable Health
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] text-vyana-dark sm:text-6xl lg:text-7xl">
            Restore Your
            <span className="block text-vyana-green">Inner Rhythm.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Personalized naturopathic and lifestyle-based wellness support to
            help you build healthier habits, prevent disease, and thrive with
            greater balance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#book"
              className="rounded-full bg-vyana-green px-7 py-4 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Book a Consultation
            </a>

            <a
              href="#about"
              className="rounded-full border border-vyana-green px-7 py-4 text-center text-sm font-semibold text-vyana-green transition hover:bg-vyana-green hover:text-white"
            >
              Discover VYANA
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="flex items-center justify-center">
          <div className="relative flex aspect-square w-full max-w-lg items-center justify-center rounded-[3rem] bg-vyana-sage/30 p-8 sm:p-12">
            <div className="flex h-full w-full items-center justify-center rounded-[2.5rem] border border-white/70 bg-white/50">
              <div className="text-center">
                <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-vyana-green/15" />

                <p className="font-serif text-3xl text-vyana-dark">
                  A healthier life,
                </p>

                <p className="mt-2 font-serif text-3xl italic text-vyana-green">
                  naturally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}