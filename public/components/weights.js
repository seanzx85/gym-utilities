import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';



class WeightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startOffset: 4
        };
        this.state.calcWeights = this.updateTableWeight(props.weight);

    }

    updateTableWeight = (weight) => {
        console.log('Update Table Weight', weight)
        //Start at 5 in to 20 (25% to 95%)
        let arr = Array(20 - this.state.startOffset - 1);
        for (let i = 0; i < arr.length; i += 1) {
            arr[i] = Math.round(((i + 1 + this.state.startOffset) / 20) * weight * 100) / 100;
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
                <div className='row col3 header'>
                    <div className='cell'>Percent</div>
                    <div className='cell'>Weight</div>
                    <div className='cell'>Nearest 5lbs</div>
                </div>
                {this.state.calcWeights.map((weight, index) => {
                    return (<div className='row col3' key={index}>
                        <div className='cell'>{(index + 1 + this.state.startOffset) * 5}%</div>
                        <div className='cell'>{weight}</div>
                        <div className='cell'>{this.nearestFive(weight)}</div>
                    </div>);
                })
                }
            </div>

        );
    }
}
WeightTable.propTypes = {
    weight: PropTypes.number.isRequired
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
                <p>Weights percentage table</p>
                <div>
                    <TextField
                        id='weight-input'
                        type='number'
                        value={this.state.weight}
                        onChange={this.updateWeight}
                        floatingLabelText='Input Weight'
                    />
                </div>
                <WeightTable weight={this.state.weight} />
            </div>
        );
    }
}

