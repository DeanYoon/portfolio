import "./App.css";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Masterhead from "./components/Masterhead";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Masterhead />
      <Aboutme />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
