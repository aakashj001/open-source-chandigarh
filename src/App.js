import React, { useEffect } from "react";
import Community from "./components/Community";
import Core from "./components/Core";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";

import Events from "./components/Events";
import Auth from "./components/Auth";
import ScrollToTop from "./SrollToTop";
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
        <Route path = {"/login"} element = {
          <>
            <Auth />
          </>
        } />
      </Routes>
      <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
