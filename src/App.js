import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder="Bitcoin..." />
      </div>
      <div className="cryptoDisplay">
        {coins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
