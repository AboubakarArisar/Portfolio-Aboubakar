import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../App";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import PageNotFound from "../Components/PageNotFound";
import Contact from "../Components/Contact";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
