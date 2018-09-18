import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class FooterBottom extends Component {
  render() {
    return (
      <div className="footer-bottom">
        <div className="wrap">
          <Link smooth to="#header" id="toTop"><span id="toTopHover"></span></Link>
        </div>
      </div>
    );
  };

};

export default FooterBottom;
