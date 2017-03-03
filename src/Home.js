import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Router, Route, Link, browserHistory } from 'react-router'

const style = {
    margin: 12,
};

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card >
                <CardHeader title="Witaj na stronie Opencache Radar" />
                <CardText >
                    <RaisedButton label="Co to jest opencaching" primary={true} style={style} />
                    <br />
                    <Link to={"/search"}>
                        <RaisedButton label="Wyszukaj cache" primary={true} style={style} />
                    </Link>
                </CardText>
            </Card>
        )
    }
}

export default Home;