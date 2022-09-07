import "./App.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
