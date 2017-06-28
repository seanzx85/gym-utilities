import React from "react";
import RaisedButton from "material-ui/RaisedButton";

class Round extends React.Component {
  constructor(props) {
    super(props);
    this.state = { round: 1 };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ round: 1 + Math.floor(nextProps.clock / 30) });
  }
  render() {
    return <div className="tabata-round">{this.state.round}</div>;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, mode: "rest" };
  }

  componentWillReceiveProps(nextProps) {
    let calcSeconds = nextProps.clock % 30,
      mode = "work";
    if (nextProps.clock === 0) {
      mode = "rest";
    }
    if (calcSeconds >= 20) {
      calcSeconds = calcSeconds - 20;
      mode = "rest";
    }
    this.setState({ seconds: calcSeconds, mode: mode });
  }

  render() {
    return (
      <div className={this.state.mode + " tabata-counter"}>
        {this.state.seconds}
      </div>
    );
  }
}

export default class Tabata extends React.Component {
  startTabata = () => {
    if (this.state.clockStart === 0) {
      this.setState({
        clockStart: Date.now()
      });
    }

    this.clock = setInterval(
      function() {
        let count = Math.round((Date.now() - this.state.clockStart) / 1000);
        if (count > 30 * 7 + 20 - 1) {
          clearInterval(this.clock);
          this.setState({
            active: false
          });
        } else {
          this.setState({
            active: true
          });
        }
        this.setState({
          clockVal: count
        });
      }.bind(this),
      100
    );
  };

  pauseTabata = () => {
    if (this.clock) {
      clearInterval(this.clock);
    }
    this.setState({
      active: false
    });
  };

  resetTabata = () => {
    this.pauseTabata();
    this.setState({
      clockStart: 0,
      clockVal: 0,
      active: false
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      clockStart: 0,
      clockVal: 0,
      active: false
    };
    this.clock = false;
    this.startTabata = this.startTabata.bind(this);
    this.pauseTabata = this.pauseTabata.bind(this);
    this.resetTabata = this.resetTabata.bind(this);
  }

  render() {
    return (
      <div>
        <p>Tabata Timer</p>
        <div className="tabata-controls">
          {!this.state.active &&
            <RaisedButton
              label="Start Timer"
              primary={true}
              onTouchTap={this.startTabata}
            />}
          {this.state.active &&
            <RaisedButton
              label="Pause Timer"
              primary={true}
              onTouchTap={this.pauseTabata}
            />}
          <RaisedButton
            label="Reset Timer"
            secondary={true}
            onTouchTap={this.resetTabata}
          />
        </div>
        <div className="tabata-timer">
          <Round clock={this.state.clockVal} />
          <Counter clock={this.state.clockVal} />
        </div>
      </div>
    );
  }
}
