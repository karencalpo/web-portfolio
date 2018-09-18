import React, { Component } from 'react';
import SITES from './sites.js'

const formatPath = (path) => {
  return `#${path}`;
};

class OtherWorks extends Component {

  constructor(props) {
    super(props);
    this.randomizer = this.randomizer.bind(this);
  }

  render() {
    return (
      <div className="portfolio-item-con">
        <div className="heading">
          <h2>Other works</h2>
          <div className="clear"></div>
        </div>
        <div className="section group" id="pages">
          {
            (this.randomizer()).map((items) => (
              <div key={items.id} className="grid_1_of_4 images_1_of_4">
                <a href={formatPath(items.path)}><img src={items.image}></img></a>
              </div>
            ))}
        </div>
      </div>
    );
  };

  randomizer() {
    const random_sites = [];
    const used = [];

    for(let i = 0; i < 4; i++) {
      let random_num = Math.floor(Math.random()*8);
      while(used.indexOf(random_num) !== -1 || random_num === this.props.id) {
        random_num = Math.floor(Math.random()*8);
      }
      used.push(random_num);
      random_sites.push(SITES[random_num]);
    }
    return random_sites;
  };

};

export default OtherWorks;
