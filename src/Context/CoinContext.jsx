import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

  // Function to fetch all coins data
  const fetchAllCoin = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': '	CG-uAVtLA3285yrcQVW8bHvLrwY'
      }
    };
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`);

    
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
      .then(response => response.json())
      .then(response => setAllCoin(response))
      .catch(err => console.error(err))
  };
  

  // Fetch coin data whenever currency changes
  useEffect(()=>{
    fetchAllCoin()
  } ,[currency])

  const contextValue = {
    allCoin, currency, setCurrency
  }

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
