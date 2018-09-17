import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Main from './main';
import Project from './project';
import SITES from './sites.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}/>
        {SITES.slice(0, 8).map(({id, path, image, link, title, description}) => (
            <Route
              exact key={id}
              path={path}
              render={(props) => <Project {...props} id={id} image={image} link={link} title={title} description={description} />}
            />
        ))}
      </Switch>
    </BrowserRouter>
), document.getElementById('root'));

console.log("blah");
