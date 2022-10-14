import React from "react";
import "./sass/style.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAV from "./components/layout/Nav"
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import ReferencesPage from "./components/references/ReferencesPage";
import ReferenceDetails from "./components/references/ReferencesDetails";
import Services from "./components/services/Services"
import ServicesDetail from "./components/services/ServicesDetails"
import About from "./components/about/About"
import Login from "./components/login/Login";
import Footer from "./components/layout/Footer"
import { AuthProvider } from "./context/AuthContext";
import AddPost from "./components/admin/add/Add";
import EditPost from "./components/admin/Edit";
import Admin from "./components/admin/Admin";
import AdminContact from "./components/admin/contact/AdminContact";
import AdminDetails from "./components/admin/contact/AdminContactDetails";
import EditPage from "./components/admin/EditPage";
import Bathroom from "./components/references/sections/Bathroom";
import Doors from "./components/references/sections/Doors";
import Garage from "./components/references/sections/Garage";
import Outdoors from "./components/references/sections/Outdoors";
import Rehab from "./components/references/sections/Rehab";


function App() {
  return (
    <AuthProvider>
      <Router>
        <NAV />
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/services" exact element={<Services />} />
              <Route path="/services/:id" exact element={<ServicesDetail />} />


              <Route path="/referencesPage" exact element={<ReferencesPage />} />
              <Route path="/references/sections/bathroom" exact element={<Bathroom />} />
              <Route path="/references/sections/doors" exact element={<Doors />} />
              <Route path="/references/sections/garage" exact element={<Garage />} />
              <Route path="/references/sections/outdoors" exact element={<Outdoors />} />
              <Route path="/references/sections/rehab" exact element={<Rehab />} />
              <Route path="/references/:id" exact element={<ReferenceDetails />} />

              <Route path="/about" exact element={<About />} />

              <Route path="/contact" exact element={<Contact />} />

              <Route path="/login" exact element={<Login />} />

              <Route path="/admin" exact element={<Admin/>} />
              <Route path="/adminContact" exact element={<AdminContact/>} />
              <Route path="/adminContact/:id" exact element={<AdminDetails/>} />


              <Route path="/add" exact element={<AddPost/> }/>
              <Route path="/editPage" exact element={<EditPage/> }/>
              <Route path="/edit/:id" exact element={<EditPost/> }/>
            </Routes>
          <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
