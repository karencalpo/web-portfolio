import React, { Component } from 'react';
import { BANNER_IMG } from "./sites";
import { SITES, BANNER } from './sites.js'

class Banner extends Component {
  render() {
    return (
      <div className="banner" id="aboutme">
      	<img src={ BANNER_IMG.quote } alt=""/>
      	<p>{ BANNER }</p>
      	<img src={ BANNER_IMG.line } alt=""/>
  		</div>
    );
  };
};

export default Banner;
