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