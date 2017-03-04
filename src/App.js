import React, {Component} from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';
import './App.css';
import './script';

const style = {
    margin: 12
};

class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render() {
        return (
            <div>
                <AppBar title="Opencache Radar" iconElementRight={< FlatButton label = "Search" />}/> {this.props.children || <Home/>}
            </div>
        );
    }
}

export default App;
