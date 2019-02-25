import React, { Component } from "react";

class AgeValidator extends Component {
  state = {
    date: "",
    valid: false,
    name: ""
  };

  handleDateChange = ({ target: { value } }) => {
    console.log(value);
    this.setState({
      date: value
    });
    if (value.length > 1 && value >= 14) {
      this.setState({
        valid: true
      });
    }
  };

  render() {
    const { date, name, valid } = this.state;
    var alert;
    if (valid) {
      alert = <input type="text" name="email" placeholder="Type your email" />;
    } else {
      alert = null;
    }
    return (
      <form>
        <input
          value={date}
          placeholder="Type your age"
          onChange={this.handleDateChange}
        />
        {alert}
      </form>
    );
  }
}
export default AgeValidator;
