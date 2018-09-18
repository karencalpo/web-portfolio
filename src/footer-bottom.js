import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class FooterBottom extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-bottom">
        <div className="wrap">
          <a href="#" id="toTop" onClick={scroll.scrollToTop()} ><span id="toTopHover"></span></a>
        </div>
      </div>
    );
  };
};

export default FooterBottom;
