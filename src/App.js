import About from "./components/About";
import Allcrops from "./components/Allcrops";
import Contact from "./components/Contact";
import Kharif from "./components/Kharif";
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Rabi from "./components/Rabi";
import Zaid from "./components/Zaid";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Kharif />
      <Rabi />
      <Zaid />
      <Allcrops />
      <Contact />
      
    </div>
  );
}

export default App;