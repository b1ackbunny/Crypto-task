import React, { Component } from 'react';

class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ inputValue: value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <h1> crypto logo</h1>

        <form>
          <label>
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={this.handleChange}
            />
          </label>
        </form>

        <ul>
          <li>1. BTC $24</li>
        </ul>
      </div>
    );
  }
}

export default Crypto;
