import React from 'react';
import TextField from 'material-ui/TextField';


export default class WeightConversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {kgs : 50, lbs: 50*2.21};
        this.updateKgs = this.updateKgs.bind(this);
        this.updateLbs = this.updateLbs.bind(this);
        //Shouldn't need bind since it is a utility
        //this.roundToOneDecimal = this.roundToOneDecimal.bind(this);

    }

    roundToOneDecimal = (number) =>{
        return Math.round(number *10)/ 10;
    }

    updateKgs = (event) => {
        let kilos = event.target.value || 0;

        this.setState({ kgs: this.roundToOneDecimal(kilos), lbs: this.roundToOneDecimal(kilos * 2.21 )});

    }

    updateLbs = (event) => {
        let pounds = event.target.value || 0;
        this.setState({ kgs: this.roundToOneDecimal(pounds / 2.21), lbs: this.roundToOneDecimal(pounds) });
    }

    render() {
        return (
            <div>
                <p>Convert Weight Units</p>
                <div>Lbs <TextField value={this.state.lbs} onChange={this.updateLbs} /></div>
                <div>Kgs <TextField value={this.state.kgs} onChange={this.updateKgs} /></div>
            </div>
        );
    }
}