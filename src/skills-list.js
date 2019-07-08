import React, { Component } from 'react';

class SkillsList extends Component {
  render() {
    return (
      <div className="grid3">
  			<div className="skills">
  		    <h3>My Skills</h3>
            <ul>
                 <li>
      	           <div className="clearfix">
                        <p className="downloading">HTML</p><br />
                        <div className="progress">
                           <div className="progress-bar1"></div>
                        </div>
                  </div>
                 </li>
                 <li>
                 	<div className="clearfix">
                      <p className="downloading">CSS</p><br />
                       <div className="progress">
                          <div className="progress-bar2"> </div>
                       </div>
                  </div>
                </li>
                <li>
                 	<div className="clearfix">
                       <p className="downloading">JavaScript</p><br />
                       <div className="progress">
                          <div className="progress-bar3"> </div>
                       </div>
                  </div>
                </li>
                 <li>
                 	<div className="clearfix">
                      <p className="downloading">Node/Express</p><br />
                       <div className="progress">
                        <div className="progress-bar4"> </div>
                       </div>
                  </div>
                  </li>
                  <li>
                   	<div className="clearfix">
                        <p className="downloading">Sass</p><br />
                         <div className="progress">
                          <div className="progress-bar5"> </div>
                         </div>
                    </div>
                </li>
           </ul>
          </div>
        </div>
    );
  };
};

export default SkillsList;
