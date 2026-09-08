import { Container } from "@/app/components/layout/Container";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { Projects } from "@/app/components/sections/Projects";
import { SystemDiagram } from "@/app/components/sections/SystemDiagram";
import { LiveDemo } from "@/app/components/sections/LiveDemo";
import { CaseStudies } from "@/app/components/sections/CaseStudies";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Container>
          <section className="flex min-h-[85vh] items-center">
            <Hero />
          </section>
        </Container>
        <Projects />
        <SystemDiagram />
        <LiveDemo />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
