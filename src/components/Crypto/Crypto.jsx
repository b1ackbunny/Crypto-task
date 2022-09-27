import React, { Component } from 'react';
import data from './data.json'

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
          {data.data.filter(data => data.symbol.toUpperCase().includes(inputValue)).map(({id, symbol, usd_price, rank}) => (
            <li key={id}>
                <span>{rank}.</span>
                <span>{symbol}</span>
                <span>{usd_price}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Crypto;
