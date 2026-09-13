"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-[0.02em] text-vyana-dark"
            aria-label="VYANA Wellness home"
            onClick={closeMenu}
          >
            <span>VYANA</span>
            <span className="ml-1 text-vyana-green">Wellness</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/about"
              className="text-sm font-medium text-vyana-dark transition hover:text-vyana-green"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-vyana-dark transition hover:text-vyana-green"
            >
              Services
            </Link>

            <Link
              href="/conditions"
              className="text-sm font-medium text-vyana-dark transition hover:text-vyana-green"
            >
              Conditions
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-vyana-dark transition hover:text-vyana-green"
            >
              Contact
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-vyana-dark transition hover:text-vyana-green"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/book"
              className="rounded-full bg-vyana-green px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-vyana-green text-vyana-green md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">Toggle menu</span>

            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 -z-10 bg-black/20 md:hidden"
              onClick={closeMenu}
            />

            <div className="mt-4 rounded-3xl border border-vyana-sage/40 bg-white p-6 shadow-xl md:hidden">
              <nav className="flex flex-col gap-5">
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="text-base font-medium text-vyana-dark transition hover:text-vyana-green"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="text-base font-medium text-vyana-dark transition hover:text-vyana-green"
                >
                  Services
                </Link>

                <Link
                  href="/conditions"
                  onClick={closeMenu}
                  className="text-base font-medium text-vyana-dark transition hover:text-vyana-green"
                >
                  Conditions
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="text-base font-medium text-vyana-dark transition hover:text-vyana-green"
                >
                  Contact
                </Link>

                <Link
                  href="/blog"
                  onClick={closeMenu}
                  className="text-base font-medium text-vyana-dark transition hover:text-vyana-green"
                >
                  Blog
                </Link>

                <Link
                  href="/book"
                  onClick={closeMenu}
                  className="mt-2 rounded-full bg-vyana-green px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Book Consultation
                </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}