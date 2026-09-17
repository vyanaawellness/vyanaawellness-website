"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Conditions", href: "/conditions" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#234D36] shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
            aria-label="VYANA Wellness home"
          >
            <Image
              src="/images/vyana-logo.png"
              alt="VYANA Wellness logo"
              width={80}
              height={80}
              priority
              className="h-16 w-16 object-contain sm:h-[72px] sm:w-[72px]"
            />

            <div className="hidden sm:block">
              <div className="font-serif text-2xl tracking-[0.16em] text-[#F7F4ED]">
                VYANA
              </div>

              <div className="text-xs tracking-[0.22em] text-[#F7F4ED]/80">
                Wellness
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#F7F4ED] transition hover:text-[#DDB85C]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Booking Button */}
          <div className="hidden lg:block">
            <Link
              href="/book"
              className="vyana-booking-glow inline-flex items-center justify-center rounded-full bg-[#F7F4ED] px-6 py-3 text-sm font-semibold text-[#234D36] transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#DDB85C] hover:text-[#234D36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDB85C]"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F4ED]/40 text-[#F7F4ED] transition hover:bg-[#F7F4ED]/10 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-[#F7F4ED]/15 bg-[#234D36] lg:hidden">
            <nav
              className="mx-auto flex max-w-7xl flex-col px-5 py-5"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#F7F4ED]/10 py-4 text-base font-medium text-[#F7F4ED] transition hover:text-[#DDB85C]"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Booking Button */}
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="vyana-booking-glow mt-5 inline-flex items-center justify-center rounded-full bg-[#F7F4ED] px-6 py-3.5 font-semibold text-[#234D36] transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#DDB85C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDB85C]"
              >
                Book a Consultation
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile backdrop */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Booking button animation */}
      <style jsx global>{`
        @keyframes vyanaBookingGlow {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(221, 184, 92, 0),
              0 0 0 rgba(221, 184, 92, 0);
          }

          45% {
            box-shadow:
              0 0 0 3px rgba(221, 184, 92, 0.3),
              0 0 18px 4px rgba(221, 184, 92, 0.35);
          }

          70% {
            box-shadow:
              0 0 0 5px rgba(221, 184, 92, 0),
              0 0 12px 2px rgba(221, 184, 92, 0.12);
          }
        }

        .vyana-booking-glow {
          animation: vyanaBookingGlow 1.6s ease-in-out infinite;
        }

        .vyana-booking-glow:hover {
          animation-play-state: paused;
          box-shadow:
            0 0 0 2px rgba(221, 184, 92, 0.7),
            0 8px 22px rgba(221, 184, 92, 0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .vyana-booking-glow {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}