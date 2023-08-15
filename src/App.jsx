import React from "react";

import "./App.css";
import { About, Contact, Home, News, Project, Services } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./containers";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/projecct" element={<Project />} />
        <Route path="/projecct/:id" element={<Project />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
