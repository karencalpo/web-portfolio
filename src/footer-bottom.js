import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class FooterBottom extends Component {

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      iconClass: ""
    }
  }

  render() {
    return (
      <div className="footer-bottom">
        <div className="wrap" style={this.iconClass}>
          <a className={this.state.iconClass} onClick={this.scrollToTop} id="toTop"><span id="toTopHover"></span></a>
        </div>
      </div>
    );
  };

  onScroll() {
    const toTop = window.pageYOffset;
    const windowSize = window.innerHeight;
    const scrollCalc = windowSize * .65;

    if((toTop < scrollCalc)) {
      if(this.state.iconClass !== "") {
        this.setState({ iconClass: "" });
      }
    } else {
      if(this.state.iconClass !== "FadeIn") {
        this.setState({ iconClass: "FadeIn" });
      }
    }
  };

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  };

  componentWillUnmount() {
    window.addEventListener('scroll', this.onScroll);
  };
};

export default FooterBottom;
