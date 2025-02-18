import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Project from "./component/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="full-content">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
