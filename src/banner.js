import React, { Component } from 'react';
import quote from "../images/quote.png";
import line from "../images/line2.jpg";
import { SITES, BANNER } from './sites.js'

class Banner extends Component {
  render() {
    return (
      <div className="banner" id="aboutme">
      	<img src={quote} alt=""/>
      	<p>{ BANNER }</p>
      	<img src={line} alt=""/>
  		</div>
    );
  };
};

export default Banner;
