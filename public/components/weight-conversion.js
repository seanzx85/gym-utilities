import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export default class WeightConversion extends React.Component {
    constructor(props) {
        super(props);
        this.weightKG = 100;
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <div>{this.weightKG}</div>
                <RaisedButton label="Default" />
            </div>
        );
    }
}