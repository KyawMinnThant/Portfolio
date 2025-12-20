import AboutMe from "./components/about-me/aboutme";
import Contact from "./components/contact/contact";
import Footer from "./components/footer";
import HeroSection from "./components/herosections/herosection";
import Project from "./components/projects/project";
import ScrollToTopButton from "./components/scrolltotopbtn";

export default function Home() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#161616]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 20px)",
      }}
    >
      <div className="w-[85%] font-dmSans mx-auto">
        <HeroSection />
        <Project />
        <AboutMe />
        <Contact />
      </div>

      <ScrollToTopButton />
    </div>
  );
}
