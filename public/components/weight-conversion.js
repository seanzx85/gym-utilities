import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export class WeightConversion extends React.Component {
    constructor(props) {
        super(props);
        this.weightKG = 100;
        console.log('Constructor');
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