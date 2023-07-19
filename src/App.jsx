import "./index.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Connect from "./components/Connect";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <Home />
      <Services />
      <About />
      <Feedback />
      <Connect />
    </div>
  );
}
