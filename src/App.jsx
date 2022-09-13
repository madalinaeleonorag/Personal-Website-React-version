import "./App.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Educations from "./components/Educations/Educations";
import Certifications from "./components/Certifications/Certifications";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Skills />
      <Experiences />
      <Educations />
      <Certifications />
    </div>
  );
}

export default App;
