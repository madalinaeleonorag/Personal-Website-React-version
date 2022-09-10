import "./App.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Skills />
      <Experiences />
    </div>
  );
}

export default App;
