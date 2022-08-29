import React from "react";
import "./sass/style.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAV from "./components/layout/Nav"
import Container from 'react-bootstrap/Container';
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import References from "./components/references/References"
import Services from "./components/services/Services"
import About from "./components/about/About"

function App() {
  return (
      <Router>
        <NAV />
          <Container>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/services" exact element={<Services />} />
              <Route path="/references" exact element={<References />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>
          </Container>
      </Router>
  );
}

export default App;
