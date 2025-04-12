import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black    mx-auto py-12 ">
     <Navbar />
    <div className="container mx-auto px-12 py-4 ">
    
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      </div>
    </main>
  );
}
