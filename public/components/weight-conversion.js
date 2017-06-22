import React from 'react';
import TextField from 'material-ui/TextField';


export default class WeightConversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { kgs: 50, lbs: 50 * 2.21, poods: 50 * 0.061 };
        this.updateKgs = this.updateKgs.bind(this);
        this.updateLbs = this.updateLbs.bind(this);
        this.updatePoods = this.updatePoods.bind(this);

        //Shouldn't need bind since it is a utility
        //this.roundToOneDecimal = this.roundToOneDecimal.bind(this);

    }

    roundToOneDecimal = (number) => {
        return Math.round(number * 10) / 10;
    }

    updateKgs = (event) => {
        let kilos = event.target.value || 0;
        this.setState({
            kgs: this.roundToOneDecimal(kilos),
            lbs: this.roundToOneDecimal(kilos * 2.21),
            poods: this.roundToOneDecimal(kilos * 0.061)
        });
    }

    updateLbs = (event) => {
        let pounds = event.target.value || 0;
        this.setState({
            kgs: this.roundToOneDecimal(pounds * 0.454),
            lbs: this.roundToOneDecimal(pounds),
            poods: this.roundToOneDecimal(pounds * 0.028)

        });
    }

    updatePoods = (event) => {
        let poods = event.target.value || 0;
        this.setState({
            kgs: this.roundToOneDecimal(poods * 16.38),
            lbs: this.roundToOneDecimal(poods * 36.11),
            poods: this.roundToOneDecimal(poods)
        })
    }



    render() {
        return (
            <div>
                <p>Convert Weight Units</p>
                <div>Lbs: <TextField name='pounds' value={this.state.lbs} onChange={this.updateLbs} /></div>
                <div>Kgs: <TextField name='kilograms' value={this.state.kgs} onChange={this.updateKgs} /></div>
                <div>Pood: <TextField name='pood' value={this.state.poods} onChange={this.updatePoods} /></div>
            </div>
        );
    }
}