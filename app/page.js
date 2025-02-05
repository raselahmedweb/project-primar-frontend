import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Footer from "@/components/pages/footer";
import Hero from "@/components/pages/hero";
import HeroBg from "@/components/pages/hero-bg";
import Partners from "@/components/pages/partners";
import Team from "@/components/pages/team";
import VarifiedScout from "@/components/pages/varified-scout";


export default function Home() {
  return (
    <>
      <HeroBg />
      <Hero />
      <About />
      <Team />
      <Partners />
      <VarifiedScout />
      <Contact/>
      <Footer/>
    </>
  );
}
