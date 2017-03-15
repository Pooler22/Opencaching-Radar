import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import Search from './Search';
import Radar from './Radar';
import SearchResult from './SearchResult';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/search" component={Search}/>
            <Route path="/results" component={SearchResult}/>
            <Route path="/radar" component={Radar}/>
        </Route>
    </Router>
</MuiThemeProvider>, document.getElementById('root'));
