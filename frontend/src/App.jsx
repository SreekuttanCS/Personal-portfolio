import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy loading the components
const Navbar = React.lazy(() => import("./component/Navbar"));
const Home = React.lazy(() => import("./component/Home"));
const Contact = React.lazy(() => import("./component/Contact"));
const About = React.lazy(() => import("./component/About"));
const Project = React.lazy(() => import("./component/Project"));

function App() {
  return (
    <Router>
      <div className="full-content">
        <div className="container">
          {/* Lazy load Navbar as well */}
          <Suspense fallback={<div>Loading Navbar...</div>}>
            <Navbar />
          </Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading Home...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>Loading Contact...</div>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading About...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/project"
              element={
                <Suspense fallback={<div>Loading Project...</div>}>
                  <Project />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
