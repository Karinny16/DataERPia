// import { useState } from 'react'
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import HomePrinc from "./Home/HomePrinc";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePrinc" element={<HomePrinc />} />
         </Routes>
    </Router>
  );
}

export default Rotas;