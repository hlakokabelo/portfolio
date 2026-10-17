import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div className="border-t border-slate-900">
          <About />
        </div>

        <div className="border-t border-slate-900">
          <Projects />
        </div>

        <div className="border-t border-slate-900">
          <Skills />
        </div>

        <div className="border-t border-slate-900">
          <Experience />
        </div>

        <div className="border-t border-slate-900">
          <Education />
        </div>

        <div className="border-t border-slate-900">
          <Certifications />
        </div>

        <div className="border-t border-slate-900">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
