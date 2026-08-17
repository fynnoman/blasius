import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ImSterbefall } from "./components/ImSterbefall";
import { UeberUns } from "./components/UeberUns";
import { Leistungen } from "./components/Leistungen";
import { Kontakt } from "./components/Kontakt";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ImSterbefall />
      <UeberUns />
      <Leistungen />
      <Kontakt />
      <Footer />
    </main>
  );
}
