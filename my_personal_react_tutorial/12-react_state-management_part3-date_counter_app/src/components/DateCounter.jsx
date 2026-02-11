import React, { Component } from "react";

class DateCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      count: 0,
    };
  }
  handleStepReduction = () => {
    if (this.state.step > 1) this.setState({ step: this.state.step - 1 });
  };
  handleStepAddition = () => {
    this.setState({ step: this.state.step + 1 });
  };
  handleCountReduction = () => {
    this.setState({ count: this.state.count - this.state.step });
  };
  handleCountAddition = () => {
    this.setState({ count: this.state.count + this.state.step });
  };
  render() {
    const curTimestamp = Date.now();
    const stateTimestamp = Date.now() + 3600 * 1000 * 24 * this.state.count;
    const stateDate = new Date(stateTimestamp).toDateString();
    let message = "";
    if (stateTimestamp > curTimestamp) {
      message = `${this.state.count} days from today is ${stateDate}`;
    } else if (stateTimestamp < curTimestamp) {
      message = `${Math.abs(this.state.count)} days ago was ${stateDate}`;
    } else {
      message = `today is ${stateDate}`;
    }
    return (
      <div className="date-counter-container">
        <div className="step-container">
          <button
            className="btn"
            onClick={this.handleStepReduction}
            disabled={this.state.step === 1}
          >
            -
          </button>
          <span className="step">Step : {this.state.step}</span>
          <button className="btn" onClick={this.handleStepAddition}>
            +
          </button>
        </div>
        <div className="count-container">
          <button className="btn" onClick={this.handleCountReduction}>
            -
          </button>
          <span className="counter">Count : {this.state.count}</span>
          <button className="btn" onClick={this.handleCountAddition}>
            +
          </button>
        </div>
        <p className="message">{message}</p>
      </div>
    );
  }
}

export default DateCounter;
