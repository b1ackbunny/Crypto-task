import React from 'react';
import PropTypes from 'prop-types'

export default function Filter({ data, value }) {
    console.log(data)
  return (
    <>
      <ol>
        {data
          .filter(data => data.symbol.toUpperCase().includes(value))
          .map(({ id, symbol, usd_price}) => (
            <li key={id}>
              <span>{symbol}</span>
              <span>${usd_price}</span>
            </li>
          ))}
      </ol>
    </>
  );
}

Filter.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            symbol: PropTypes.string,
            usd_price: PropTypes.number
        })
    ),
    value: PropTypes.string,
}