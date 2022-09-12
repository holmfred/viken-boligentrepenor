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
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import Footer from "./components/layout/Footer"

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
              <Route path="/login" exact element={<Login />} />
              <Route path="/admin" exact element={<Admin />} />
            </Routes>
          </Container>
          <Footer />
      </Router>
  );
}

export default App;
