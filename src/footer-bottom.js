import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class FooterBottom extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  render() {
    return (
      <div className="footer-bottom">
        <div className="wrap">
          <a href="#" id="toTop" onClick={this.scrollToTop} ><span id="toTopHover"></span></a>
        </div>
      </div>
    );
  };

  scrollToTop(e) {
    scroll.scrollToTop();
  }
};

export default FooterBottom;
