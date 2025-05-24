import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Navbar = React.lazy(() => import("./component/navbar/Navbar"));
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  return (
    <Router>
      <div className="full-content">
        <div className="container">
          <Suspense fallback={<div></div>}>
            <Navbar />
          </Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div></div>}>
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
