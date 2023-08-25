import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Mode from "@/components/Mode/Mode";
import Nav from "@/components/Nav/Nav";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Social from "@/components/Social/Social";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="w-10/12 m-auto">
        <Header />
        <Nav />
        <Social />
        <About />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
        <Mode />
      </div>
      <Footer />
    </>
  );
}
