import React, {Component} from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import Home from './Home';
import './App.css';
import './script';

class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render() {
        return (
            <div>
                <AppBar title="Opencache Radar" iconElementRight={< FlatButton label="Search" />}/> {this.props.children || <Home/>}
            </div>
        );
    }
}

export default App;
