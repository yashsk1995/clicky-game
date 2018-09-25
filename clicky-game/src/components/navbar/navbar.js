import React from "react";
import "./navbar.css";

const Navbar = props => (
  <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
   
    <ul className="nav navbar-nav">
    <li><h2 className="navbar-brand navbar-items1">Clicky Game</h2></li>
    <li><h2 className="navbar-brand navbar-items2">Click on image to start game!!</h2></li> 
    <li><h2 className="navbar-brand navbar-items3">Score : {props.score}</h2></li>
    <li><h2 className="navbar-brand navbar-items4">Top Score :{props.topscore}</h2></li>
    </ul>
  </div>
</nav>

  </div>
);

export default Navbar;
