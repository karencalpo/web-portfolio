import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class FooterBottom extends Component {

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      iconClass: ""
    }
  }

  render() {
    return (
      <div className="footer-bottom">
        <div className="wrap" style={this.iconClass}>
          <Link smooth to="#header" id="toTop" className={this.state.iconClass}><span id="toTopHover" ref={(el) => this.footerImgRef = el}></span></Link>
        </div>
      </div>
    );
  };

  onScroll() {
    let toTop = window.pageYOffset;
    let windowSize = window.innerHeight;

    if(toTop < windowSize * .65) {
      this.setState({ iconClass: "" });
    } else {
      this.setState({ iconClass: "FadeIn" });
    }

  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  };

  componentWillUnmount() {
    window.addEventListener('scroll', this.onScroll);
  };
};

export default FooterBottom;
