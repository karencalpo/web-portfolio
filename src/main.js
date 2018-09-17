import React, { Component } from 'react';
import Header from './header';
import Banner from './banner';
import Portfolio from './portfolio';
import FooterTop from './footer-top';
import FooterBottom from './footer-bottom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.aboutMe = React.createRef();
  }

  render() {
    return (
      <article>
        <div className="wrap">
          <Header />
          <Banner />
          <Portfolio />
        </div>
        <FooterTop />
        <FooterBottom />
      </article>
    );
  };
};

export default Main;
