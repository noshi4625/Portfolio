import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  const[color , setcolor] = useState("black")
    
  function changeColor(){
    color === "black"  ? setcolor("rgb(134, 134, 134)") : setcolor("black");

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(199, 195, 195)",height:"100px" }}>
  <div className="container-fluid">
    <Link className="navbar-brand mx-5 fs-2" to="/"><b>CLYDE.</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav fs-4">
        <li className="nav-item ms-5">
          <Link className="nav-link active" to="/home"><b onClick={changeColor} style={{color}}>Home</b></Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link active" to="/About"><b onClick={changeColor} style={{color}}>About</b></Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link active" to="/Skill"><b onClick={changeColor} style={{color}}>Skills</b></Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link active" to="/Services"><b onClick={changeColor} style={{color}}>Services</b></Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link active" to="/Projects"><b onClick={changeColor} style={{color}}>Projects</b></Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link active" to="/Blog"><b onClick={changeColor} style={{color}}>Blog</b></Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link active" to="/Contact"><b onClick={changeColor} style={{color}}>Contact</b></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
