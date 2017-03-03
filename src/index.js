import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import Search from './Search'
import Home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';


ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/search" component={Search} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
