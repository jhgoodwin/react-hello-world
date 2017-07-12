import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }
  addGreeting() {
    this.props.addGreeting(this.state.greetingName);
    this.setState({ greetingName: '' });
  }
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.addGreeting();
    }
  }
  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }
  render() {
    return (
      <div className="AddGreeter">
        <input
            type="text"
            onChange={this.handleUpdate}
            onKeyPress={this.handleKeyPress}
            value={this.state.greetingName}
        />
        &nbsp;&nbsp;
        <button onClick={this.addGreeting}>Add</button>
      </div>
    );
  }
}

export default AddGreeter;