import "./App.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Educations from "./components/Educations/Educations";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import Awards from "./components/Awards/Awards";
import Publications from "./components/Publications/Publications";
import Photography from "./components/Photography/Photography";
import Recommendations from "./components/Recommendations/Recommendations";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Skills />
      <Experiences />
      <Educations />
      <Certifications />
      <Projects />
      <Awards />
      <Publications />
      <Photography />
      <Recommendations />
      <Contact />
      <div className="copyright">© Madalina-Eleonora Gheorghe 2021</div>
    </div>
  );
}

export default App;
