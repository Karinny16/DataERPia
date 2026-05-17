// import { useState } from 'react'
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Componentes/Navbar";

import HomePrinc from "./Home/HomePrinc";
import HomeAbout from "./Home/HomeAbout";

function Rotas() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePrinc />} />
        <Route path="/HomeAbout" element={<HomeAbout />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
