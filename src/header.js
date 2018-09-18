import React, { Component } from 'react';
import logo from "../images/logo2.jpg";

class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="logo">
          <a href="/"><img src={logo} alt="Site Logo Image" /></a>
        </div>
        <nav className="nav">
				<ul>
						<li className="active"><a href="/">HOME</a> </li>
						<li><a href="/#aboutme" className="scroll" onClick={(e) => this.scrollToElement("aboutme", e)}>ABOUT</a></li>
						<li><a href="/#works" className="scroll" onClick={(e) => this.scrollToElement("works", e)}>WORKS</a>  </li>
						<li><a href="/#skills" className="scroll" onClick={(e) => this.scrollToElement("skills", e)}>SKILLS</a> </li>
						<div className="clear"> </div>
				</ul>
		   </nav>
		   <div className="clear"></div>
      </header>
    );
  };

  scrollToElement(element, e) {
      const el = document.getElementById(element);
      if(el) {
        e.preventDefault();
        el.scrollIntoView({behavior: "smooth"});
      }
  };
};

export default Header;
