import { Chrome, Footer, Nav } from "@/components/Chrome";
import { Hero, Marquee } from "@/components/Hero";
import { About, Expertise } from "@/components/About";
import { Work } from "@/components/Work";
import { Philosophy, Toolkit, Path } from "@/components/Sections";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Chrome />
      <Nav />
      <main>
        <Hero />
        <Marquee text="Backend Engineering ✳ AI/ML ✳ Quality Assurance ✳ Mobile Development ✳ Problem Solving ✳" />
        <Marquee text="Edge cases ✳ Debugging ✳ FastAPI ✳ Pytest ✳ Flutter ✳ YOLOv8 ✳ RAG ✳" dark reverse />
        <About />
        <Expertise />
        <Work />
        <Philosophy />
        <Toolkit />
        <Path />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
