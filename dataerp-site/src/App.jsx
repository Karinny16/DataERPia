// import { useState } from 'react'
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Componentes/Navbar";


import HomePrinc from "./Home/HomePrinc";

function Rotas() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/HomePrinc" element={<HomePrinc />} />
         </Routes>
    </Router>
  );
}

export default Rotas;