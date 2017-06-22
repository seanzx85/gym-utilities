import React from 'react';
import TextField from 'material-ui/TextField';


class WeightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { calcWeights: this.updateTableWeight(props.weight) };
    }

    updateTableWeight = (weight) => {
        console.log('Update Table Weight', weight)

        let arr = Array(20);
        for (let i = 0; i < arr.length; i += 1) {
            arr[i] = Math.round(((i + 1) / 20) * weight * 100) / 100;
        }
        console.log(arr)
        return arr;
    }

    nearestFive = (weight) => {
        let test = Math.round(weight),
            position = test % 5;
        if (position >= 3) {
            return test + (5 - position);
        } else {
            return test - position;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.weight !== nextProps.weight) {
            this.setState({ calcWeights: this.updateTableWeight(nextProps.weight) });
        }
    }

    render() {
        return (
            <div className='weight-table'>
                <div className='row'>
                    <span className='cell'>Percent</span>
                    <span className='cell'>Weight</span>
                    <span className='cell'>Nearest 5lbs</span>
                </div>
                {this.state.calcWeights.map((weight, index) => {
                    return (<div className='row' key={index}>
                        <span className='cell'>{index}</span>
                        <span className='cell'>{weight}</span>
                        <span className='cell'>{this.nearestFive(weight)}</span>
                    </div>);
                })
                }
            </div>

        );
    }
}


export default class Weights extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: 135
        }

        this.updateWeight = this.updateWeight.bind(this);
    }
    updateWeight = (event) => {
        var userWeight = event.target.value

        this.setState({ weight: userWeight })
    }


    render() {
        return (
            <div>
                <h1>Weights</h1>
                <div>
                    Input Weight <TextField
                        id='weight-input'
                        value={this.state.weight}
                        onChange={this.updateWeight}
                    />
                </div>
                <div>{this.state.weight}</div>
                <WeightTable weight={this.state.weight} />
            </div>
        );
    }
}

