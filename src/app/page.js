import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black   ">
     <Navbar />
    <div >
    
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />

      </div>
      <Footer />
    </main>
  );
}
