
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">MinhaLogo</Link>
      <ul className="nav-links">
        <li><Link to="/HomePrinc">Home</Link></li>
        <li><Link to="/HomeAbout">Sobre</Link></li>
        <li><Link to="/manual">Manual de Uso</Link></li>
        <li><Link to="/feed">Feed</Link></li>
         <li><Link to="/projeto">Projeto</Link></li>

      </ul>       
    </nav>
  );
}
