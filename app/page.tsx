import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WebsiteTypes from "@/components/WebsiteTypes";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WebsiteTypes />
        <Work />
        <Services />
        <Experience />
        <Stack />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
