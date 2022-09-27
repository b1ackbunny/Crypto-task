import React, { Component } from 'react';
import Logo from './Logo/Logo';
import Filter from './Filter/Filter';
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
        <Logo/>

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

      <Filter data={data.data} value={inputValue}/>
      </div>
    );
  }
}

export default Crypto;
