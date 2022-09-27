import React from 'react';

export default function Filter({ data, value }) {
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
