import React, { Component } from 'react';
import location_icon from "../images/location.png";
import avatar_icon from "../images/avatar.jpg";

class SkillsSummary extends Component {
  render() {
    return (
      <div className="grid">
    			<div className="grid1">
    				<div className="img">
    					<img src={avatar_icon} alt=""/>
    				</div>
    				<div className="data">
    				<h3>Karen Calpo</h3>
    				<p><img src={location_icon} alt=""/> San Francisco Bay Area, California</p>
    				</div>
    				<div className="clear"></div>
    			</div>
			    <div className="clear"></div>
  		<p>A developer skilled in creating websites/web applications. Apply technical skill set and background in software QA to deliver
  		enhancements, improve usability, and discover defects. Equally adept in website maintenance, cross-browser compatibility, content updates,
  		and GUI development.</p>
		</div>
    );
  };
};

export default SkillsSummary;
