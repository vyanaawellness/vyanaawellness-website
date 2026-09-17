import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-vyana-dark py-12 text-white sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Footer main content */}
        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl">
              VYANA <span className="text-vyana-sage">Wellness</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
              Restore Your Inner Rhythm through personalized, sustainable
              lifestyle and holistic wellness guidance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-white">Explore</p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/about" className="hover:text-white">
                About
              </Link>

              <Link href="/services" className="hover:text-white">
                Services
              </Link>

              <Link href="/conditions" className="hover:text-white">
                Conditions
              </Link>

              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>

              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact information */}
          <div>
            <p className="font-semibold text-white">VYANA Wellness</p>

            <div className="mt-4 space-y-2 text-sm text-white/60">
              <p>Dr. Bhoomi Panchal, BNYS</p>

              <a
                href="mailto:info@vyanaawellness.com"
                className="block hover:text-white"
              >
                info@vyanaawellness.com
              </a>

              <Link href="/book" className="block hover:text-white">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright and privacy */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <p>
            © {new Date().getFullYear()} VYANA Wellness. All rights reserved.
          </p>

          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}