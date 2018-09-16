import React, { Component } from 'react';
import logo from "../images/logo2.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <a href="index.html"><img src={logo} alt="Site Logo Image" /></a>
        </div>
        <nav className="nav">
				<ul>
						<li className="active"><a href="index.html">HOME</a> </li>
						<li><a href="#aboutme" className="scroll">ABOUT</a></li>
						<li><a href="#works" className="scroll">WORKS</a>  </li>
						<li><a href="#skills" className="scroll">SKILLS</a> </li>
						<div className="clear"> </div>
				</ul>
		   </nav>
		   <div className="clear"></div>
      </header>
    );
  }
}

export default Header;
