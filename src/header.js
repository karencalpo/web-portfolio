import React, { Component } from 'react';
import logo from "../images/logo2.jpg";
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <div className="logo">
          <a href="/"><img src={logo} alt="Site Logo Image" /></a>
        </div>
        <nav className="nav">
				<ul>
						<li className="active"><Link smooth to="/" className="scroll">HOME</Link></li>
						<li><Link smooth to="/#aboutme" className="scroll">ABOUT</Link></li>
            <li><Link smooth to="/#works" className="scroll">WORKS</Link></li>
            <li><Link smooth to="/#skills" className="scroll">SKILLS</Link></li>
						<div className="clear"> </div>
				</ul>
		   </nav>

		   <div className="clear"></div>
      </header>
    );
  };
};

export default Header;
