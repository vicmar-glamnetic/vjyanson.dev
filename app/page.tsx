import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import Experience    from "@/components/Experience";
import Skills        from "@/components/Skills";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";
import Cursor        from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader    from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
