import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Werdegang } from "@/components/site/Werdegang";
import { Kontakt } from "@/components/site/Kontakt";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Werdegang />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}