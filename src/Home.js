import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const style = {
    margin: 12,
};

class Home extends Component {
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
