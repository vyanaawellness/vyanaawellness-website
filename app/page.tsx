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

function BotanicalBranch({ right = false }: { right?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 390 115"
      fill="none"
      className={`pointer-events-none absolute bottom-0 hidden h-full w-[390px] lg:block ${
        right ? "right-0 -scale-x-100" : "left-0"
      }`}
    >
      <g opacity="0.72">
        <path
          d="M-8 112C42 78 91 67 139 48C190 28 241 31 315 12"
          stroke="#829A76"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M38 84C27 64 18 44 23 18"
          stroke="#9CAE8C"
          strokeWidth="1.1"
        />
        <path
          d="M79 68C69 49 70 31 82 9"
          stroke="#9CAE8C"
          strokeWidth="1.1"
        />
        <path
          d="M117 55C115 35 127 20 145 5"
          stroke="#9CAE8C"
          strokeWidth="1.1"
        />
        <path
          d="M160 42C164 58 181 70 207 76"
          stroke="#9CAE8C"
          strokeWidth="1.1"
        />
        <path
          d="M201 32C205 15 222 7 247 3"
          stroke="#9CAE8C"
          strokeWidth="1.1"
        />
        <path
          d="M250 27C265 39 284 42 307 38"
          stroke="#9CAE8C"
          strokeWidth="1.1"
        />

        <path
          d="M23 18C3 29 0 47 14 63C31 50 34 34 23 18Z"
          fill="#C8D8BF"
        />
        <path
          d="M23 18C27 37 24 50 14 63"
          stroke="#A6B99A"
          strokeWidth="0.8"
        />

        <path
          d="M82 9C57 13 48 31 58 49C80 44 91 27 82 9Z"
          fill="#D7E3D0"
        />
        <path
          d="M82 9C78 25 71 39 58 49"
          stroke="#A6B99A"
          strokeWidth="0.8"
        />

        <path
          d="M145 5C120 5 105 19 108 38C131 38 145 25 145 5Z"
          fill="#B9CDAF"
        />
        <path
          d="M145 5C137 19 125 30 108 38"
          stroke="#92A887"
          strokeWidth="0.8"
        />

        <path
          d="M160 42C164 65 181 78 207 76C203 56 186 43 160 42Z"
          fill="#DCE7D5"
        />
        <path
          d="M160 42C177 57 192 69 207 76"
          stroke="#A6B99A"
          strokeWidth="0.8"
        />

        <path
          d="M247 3C224 -2 209 8 205 25C225 31 241 20 247 3Z"
          fill="#C4D5BA"
        />
        <path
          d="M247 3C230 13 217 21 205 25"
          stroke="#91A786"
          strokeWidth="0.8"
        />

        <path
          d="M250 27C265 45 284 51 307 38C294 22 275 18 250 27Z"
          fill="#D7E3D0"
        />
        <path
          d="M250 27C270 32 290 36 307 38"
          stroke="#A6B99A"
          strokeWidth="0.8"
        />

        <path
          d="M49 78C27 76 12 87 9 108C32 111 46 99 49 78Z"
          fill="#DDE8D7"
        />
        <path
          d="M49 78C37 91 24 101 9 108"
          stroke="#A6B99A"
          strokeWidth="0.8"
        />

        <path
          d="M117 55C94 57 80 73 84 92C107 89 119 75 117 55Z"
          fill="#B8CDAE"
        />
        <path
          d="M117 55C108 70 97 83 84 92"
          stroke="#91A786"
          strokeWidth="0.8"
        />

        <path
          d="M201 32C188 44 186 60 197 73C213 62 216 45 201 32Z"
          fill="#D8E3D0"
        />
        <path
          d="M201 32C204 48 203 61 197 73"
          stroke="#A6B99A"
          strokeWidth="0.8"
        />

        <path
          d="M140 48C148 31 160 22 175 20"
          stroke="#C4AE78"
          strokeWidth="1"
        />
        <ellipse
          cx="176"
          cy="19"
          rx="5"
          ry="9"
          transform="rotate(38 176 19)"
          fill="#E7DAB7"
        />

        <path
          d="M230 30C236 43 245 50 257 54"
          stroke="#C4AE78"
          strokeWidth="1"
        />
        <ellipse
          cx="258"
          cy="55"
          rx="4"
          ry="7"
          transform="rotate(-45 258 55)"
          fill="#E7DAB7"
        />

        <path
          d="M286 20C294 9 305 5 317 5"
          stroke="#C4AE78"
          strokeWidth="1"
        />
        <ellipse
          cx="318"
          cy="5"
          rx="4"
          ry="7"
          transform="rotate(55 318 5)"
          fill="#E7DAB7"
        />
      </g>
    </svg>
  );
}

function AnimatedWebinarStar() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-9 w-9 shrink-0 items-center justify-center"
    >
      {/* SOFT GOLDEN HALO */}
      <span className="webinar-star-halo absolute inset-0 rounded-full bg-[#F2D88D]/45 blur-md" />

      {/* EXPANDING LIGHT RING */}
      <span className="webinar-star-ring absolute inset-[5px] rounded-full border border-[#D5AA4D]/60" />

      {/* MAIN FOUR-POINT STAR */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="webinar-star-core relative z-10 h-7 w-7"
      >
        <path
          d="M20 2C22.8 13.5 26.5 17.2 38 20C26.5 22.8 22.8 26.5 20 38C17.2 26.5 13.5 22.8 2 20C13.5 17.2 17.2 13.5 20 2Z"
          fill="#B58C37"
        />

        <path
          d="M20 8C21.8 15.7 24.3 18.2 32 20C24.3 21.8 21.8 24.3 20 32C18.2 24.3 15.7 21.8 8 20C15.7 18.2 18.2 15.7 20 8Z"
          fill="#F8E8B6"
        />
      </svg>

      {/* FINE VERTICAL LIGHT RAY */}
      <span className="webinar-star-ray absolute left-1/2 top-1/2 h-12 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#D6AE52] to-transparent" />

      {/* FINE HORIZONTAL LIGHT RAY */}
      <span className="webinar-star-ray absolute left-1/2 top-1/2 h-px w-12 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#D6AE52] to-transparent" />

      <style>{`
        @keyframes webinarStarGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.65);
          }

          20% {
            opacity: 0.9;
            transform: scale(1.1);
          }

          38% {
            opacity: 0.3;
            transform: scale(0.8);
          }

          55% {
            opacity: 0.15;
            transform: scale(0.65);
          }
        }

        @keyframes webinarStarPulse {
          0%, 100% {
            transform: scale(0.85);
            filter: drop-shadow(0 0 0px #D6AE52);
          }

          20% {
            transform: scale(1.22);
            filter: drop-shadow(0 0 7px #D6AE52);
          }

          38% {
            transform: scale(1);
            filter: drop-shadow(0 0 2px #D6AE52);
          }

          55% {
            transform: scale(0.85);
            filter: drop-shadow(0 0 0px #D6AE52);
          }
        }

        @keyframes webinarStarRing {
          0% {
            opacity: 0;
            transform: scale(0.4);
          }

          15% {
            opacity: 0.7;
          }

          45%, 100% {
            opacity: 0;
            transform: scale(1.7);
          }
        }

        @keyframes webinarStarRay {
          0%, 100% {
            opacity: 0;
          }

          15%, 25% {
            opacity: 0.85;
          }

          45% {
            opacity: 0;
          }
        }

        /* FASTER ANIMATION: 2 SECONDS */
        .webinar-star-halo {
          animation: webinarStarGlow 2s ease-in-out infinite;
        }

        .webinar-star-core {
          animation: webinarStarPulse 2s ease-in-out infinite;
        }

        .webinar-star-ring {
          animation: webinarStarRing 2s ease-out infinite;
        }

        .webinar-star-ray {
          animation: webinarStarRay 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .webinar-star-halo,
          .webinar-star-core,
          .webinar-star-ring,
          .webinar-star-ray {
            animation: none !important;
          }
        }
      `}</style>
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFCF7]">
      <Header />

      {/* NAVRATRI WEBINAR ANNOUNCEMENT */}
      <section
        aria-label="Upcoming Navratri webinar"
        className="relative isolate overflow-hidden border-b border-[#E8DFC8] bg-[#FFFCF7]"
      >
        <BotanicalBranch />

        <BotanicalBranch right />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-3 text-center sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:px-8 lg:min-h-[76px] lg:py-3">
          {/* ANIMATED STAR + WEBINAR BADGE */}
          <div className="flex shrink-0 items-center gap-3">
            <AnimatedWebinarStar />

            <span className="rounded-full border border-[#E5D3A8] bg-[#FFF9ED] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#947638] sm:text-xs">
              Special Webinar
            </span>
          </div>

          <span className="hidden h-7 w-px bg-[#D9C7A2] lg:block" />

          <p className="text-sm font-semibold leading-6 text-[#234D36] sm:text-base">
            Therapeutic Fasting During Navratri
          </p>

          <span className="hidden h-7 w-px bg-[#D9C7A2] lg:block" />

          <p className="text-xs font-medium leading-6 text-[#647461] sm:text-sm">
            4 October 2026 · 6 PM IST
          </p>

          <Link
            href="/webinar/navratri-2026#register"
            className="group inline-flex shrink-0 items-center gap-2 border-b-2 border-[#C5A25B] pb-0.5 text-sm font-bold text-[#234D36] transition hover:border-[#234D36] hover:text-[#4F7942] sm:text-base"
          >
            Register now

            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      <Hero />

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