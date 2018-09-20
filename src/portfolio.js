import React, { Component } from 'react';
import { SITES, BANNER } from './sites.js'

const formatPath = (path) => {
  return `#${path}`;
};

class Portfolio extends Component {
  render() {
    return (
        <div className="content" id="works">
      		<div className="gallery">
      		<h2>Portfolio</h2>
      		<div className="section group">
            {SITES.slice(0, 4).map(({id, path, image }) => (
              <div key={id} className="grid_1_of_4 images_1_of_4">
    		        <a href={formatPath(path)}><img src={image}></img></a>
              </div>
            ))}
      		</div>
          <div className="section group">
          {SITES.slice(4, 8).map(({id, path, image }) => (
            <div key={id} className="grid_1_of_4 images_1_of_4">
             <a href={formatPath(path)}><img src={image}></img></a>
            </div>
          ))}
      		</div>
      	</div>
      	<div className="clear"> </div>
      </div>
    );
  };
};

export default Portfolio;
