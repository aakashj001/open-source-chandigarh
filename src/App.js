import React, { useEffect } from "react";
import Community from "./components/Community";
import Core from "./components/Core";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
<<<<<<< HEAD
=======
import Events from "./components/Events";
import ScrollToTop from "./SrollToTop";
>>>>>>> 06dc6c983885176e990e80a9eb4e7acad2153e44
import Partners from "./components/Partners";

function App() {
  useEffect(() => {
    document.title = "OpenSource Chandigarh";
  }, []);
  return (
    <Router>
      <ScrollToTop>
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Main />
              <Partners />
              <Community />
              <Core />
<<<<<<< HEAD
              <Partners/>
              <Testimonials />
=======
>>>>>>> 06dc6c983885176e990e80a9eb4e7acad2153e44
            </>
          }
        />
        <Route path={"/projects"} element = {
          <>
            <Projects />
          </>
        } />
        <Route path = {"/events"} element = {
          <>
            <Events />
          </>
        } />
      </Routes>
      <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
