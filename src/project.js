import React, { Component } from 'react';
import Header from './header';
import OtherWorks from './other';
import FooterBottom from './footer-bottom';

class Project extends Component {

  constructor(props) {
    super(props);
    this.createMarkup = this.createMarkup.bind(this);
  }

  render() {
    return (
      <article>
      <div className="wrap">
        <Header />
        <div className="content">
          <div className="portfolio-item">
            <h1>{this.props.title}</h1>
            <div className="img-info">
              <p dangerouslySetInnerHTML={this.createMarkup()}></p><br /><br />
            </div>
            <div className="banner1">
  				      <a href={this.props.link} target="_blank"><img src={this.props.image} alt={this.props.title}></img></a>
  			    </div>
            <OtherWorks id={this.props.id} />
          </div>
        </div>
      </div>
      <FooterBottom />
      </article>
    );
  };

  createMarkup() {
    return {__html: this.props.description};
  }

};

export default Project;
