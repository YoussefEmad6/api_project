import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      {coins.map((coin) => {
        return <Coin key={coin.id} name={coin.name} />;
      })}
    </div>
  );
}

export default App;
