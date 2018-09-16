import React, { Component } from 'react';
import image1 from "../images/deltadentalins.jpg";
import image2 from "../images/delta_aarp.jpg";
import image3 from "../images/business_tivo.jpg";
import image4 from "../images/forward_faster.jpg";
import image5 from "../images/fps.jpg";
import image6 from "../images/nasa_site.jpg";
import image7 from "../images/oanda.jpg";
import image8 from "../images/github.jpg";

class Portfolio extends Component {
  render() {
    return (
        <div className="content" id="works">
      		<div className="gallery">
      		<h2>Portfolio</h2>
      		<div className="section group">
            <div className="grid_1_of_4 images_1_of_4">
  		        <a href="deltadentalins.html"><img src={image1}></img></a>
            </div>
            <div className="grid_1_of_4 images_1_of_4">
  		        <a href="delta_aarp.html"><img src={image2}></img></a>
            </div>
  	        <div className="grid_1_of_4 images_1_of_4">
  		        <a href="business_tivo.html"><img src={image3}></img></a>
            </div>
            <div className="grid_1_of_4 images_1_of_4">
  		        <a href="forward_faster.html"><img src={image4}></img></a>
            </div>
      		</div>
          <div className="section group">
             <div className="grid_1_of_4 images_1_of_4">
                  <a href="fps.html"><img src={image5}></img></a>
             </div>
             <div className="grid_1_of_4 images_1_of_4">
                  <a href="nasa_site.html"><img src={image6}></img></a>
             </div>
             <div className="grid_1_of_4 images_1_of_4">
                  <a href="oanda.html"><img src={image7}></img></a>
             </div>
             <div className="grid_1_of_4 images_1_of_4">
                  <a href="github.html"><img src={image8}></img></a>
             </div>
      		</div>
      	</div>
      	<div className="clear"> </div>
      </div>
    );
  };
};

export default Portfolio;
