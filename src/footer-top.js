import React, { Component } from 'react';
import SkillsSummary from './skills-summary';
import SkillsList from './skills-list';

class FooterTop extends Component {
  render() {
    return (
      <div className="footer-top" id="skills">
        <div className="wrap">
          <SkillsSummary />
          <SkillsList />
          <div className="clear"></div>
        </div>
      </div>
    );
  };
};

export default FooterTop;
