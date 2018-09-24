import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Main from './main';
import Project from './project';
import { SITES, BANNER } from './sites'
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
    <HashRouter basename="/">
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/aboutme' component={Main}/>
        <Route exact path='/works' component={Main}/>
        <Route exact path='/skills' component={Main}/>
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
