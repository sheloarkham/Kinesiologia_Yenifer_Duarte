import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Process } from "@/app/components/Process";
import { Services } from "@/app/components/Services";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
