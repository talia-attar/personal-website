import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App ">
      <NavBar />

      <Home />
      <About />

      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
