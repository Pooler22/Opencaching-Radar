import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

const style = {
    margin: 12,
};

class Search extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: 1,
        ns: false,
        we: false,
    };

    handleChange = (event, index, value) => this.setState({ value });
    handleChangeNS = (event, index, ns) => this.setState({ ns });
    handleChangeWE = (event, index, we) => this.setState({ we });


    render() {
        return (
            <div className="App">

                <h1>Szukanie skrzynki</h1>
                <List>
                    <Subheader>Szukaj skrzyniki po:</Subheader>
                    <ListItem primaryText="Nazwie" />
                    <ListItem primaryText="Waypoint'cie" />
                    <ListItem primaryText="Założycielu skrzynki" />
                    <ListItem primaryText="Współrzędnych" />
                    <ListItem primaryText="Mojej lokalizacji" />
                    <ListItem primaryText="Adresie" />
                </List>

                <h1>Szukanie po nazwie</h1>
                <TextField hintText="Wpisz tu nazwę skrzynki..." floatingLabelText="Nazwa skrzynki" />
                <br />
                <RaisedButton label="Szukaj" />
                <br />

                <h1>Szukanie po waypoint'cie</h1>
                <TextField hintText="Wpisz tu nazwę waypoint'a..." floatingLabelText="Nazwa waypoint'a" />
                <br />
                <RaisedButton label="Szukaj" />
                <br />

                <h1>Szukanie po założycielu skrzynki</h1>
                <TextField hintText="Wpisz tu nazwę zalożyciela skrzynki..." floatingLabelText="Nazwa zalożyciela skrzynki" />
                <br />
                <RaisedButton label="Szukaj" />
                <br />

                <h1>Szukanie po współrzędnych</h1>
                <TextField hintText="Wpisz tu nazwę skrzynki..." floatingLabelText="Nazwa skrzynki" />
                <br />
                <SelectField floatingLabelText="N/S" value={this.state.ns} onChange={this.handleChangeNS} >
                    <MenuItem value={false} primaryText="N" />
                    <MenuItem value={true} primaryText="S" />
                </SelectField>
                <TextField hintText="00" floatingLabelText="00°" />
                <TextField hintText="00.000" floatingLabelText="00.000'" />
                <br />
                <SelectField floatingLabelText="W/E" value={this.state.we} onChange={this.handleChangeWE} >
                    <MenuItem value={false} primaryText="W" />
                    <MenuItem value={true} primaryText="E" />
                </SelectField>
                <TextField hintText="00" floatingLabelText="00°" />
                <TextField hintText="00.000" floatingLabelText="00.000'" />
                <br />

                <RaisedButton label="Szukaj" />
                <br />

                <h1>Szukanie po mojej lokalizacji</h1>
                <Checkbox label="Pomiń nieaktywne skrzynki" />
                <br />
                <RaisedButton label="Szukaj" />
                <br />

                <h1>Szukanie po adresie</h1>
                <TextField hintText="Wpisz tu adres..." floatingLabelText="Adres" />
                <br />
                <SelectField floatingLabelText="Maksymalna odległość" value={this.state.value} onChange={this.handleChange} >
                    <MenuItem value={1} primaryText="1 km" />
                    <MenuItem value={3} primaryText="3 km" />
                    <MenuItem value={5} primaryText="5 km" />
                    <MenuItem value={10} primaryText="10 km" />
                    <MenuItem value={15} primaryText="15 km" />
                    <MenuItem value={25} primaryText="25 km" />
                </SelectField>
                <br />
                <Checkbox label="Pomiń nieaktywne skrzynki" />
                <br />
                <RaisedButton label="Szukaj" />
                <br />

                <p>Kontakt</p>
            </div>
        )
    }
}

export default Search;