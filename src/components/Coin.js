import React from "react";
import "./Coin.css";
const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin">
      <h1> Name: {name}</h1>
      <img src={image} alt="Bitcoin" />
      <h3> Price: {price}</h3>
      <h3> Symbol: {symbol}</h3>
    </div>
  );
};

export default Coin;
