import React, { Component } from 'react';
import quote from "../images/quote.png";
import line from "../images/line2.jpg";

class Banner extends Component {
  render() {
    return (
      <div className="banner" id="aboutme" ref={this.aboutMe}>
      	<img src={quote} alt=""/>
      	<p>My love for things computer-related combined with my love for things artistic led me to where I am now. Here is a collection of web projects I have done over time. While not an exhaustive collection of everything I have done, it gives an idea of what I am capable of and what I have done in the past. Currently, I am working as a developer doing projects for businesses, friends, and family in different industries and areas such as healthcare, multimedia, government, and consumer electronics.</p>
      	<img src={line} alt=""/>
  		</div>
    );
  };
};

export default Banner;
