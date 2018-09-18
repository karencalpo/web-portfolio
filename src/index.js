import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Main from './main';
import Project from './project';
import SITES from './sites.js';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
    <HashRouter basename="/">
      <Switch>
        <Route exact path='/' component={Main}/>
        {SITES.map(({id, path, image, link, title, description}) => (
            <Route
              exact
              key={id}
              path={path}
              render={(props) => <Project {...props} id={id} image={image} link={link} title={title} description={description} />}
            />
        ))}
      </Switch>
    </HashRouter>
), document.getElementById('root'));
