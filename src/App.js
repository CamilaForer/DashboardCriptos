import {useEffect, useState} from 'react'
import "./App.css"; 
import axios from 'axios'; 
import TableCoins from './TableCoins';
import {Buttons} from "./Buttons";

export default function App() {
  const [coins, setCoins] = useState([])
  const getData = async () =>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h")
    console.log(res.data);
    setCoins(res.data);
  }
  useEffect(()=>{
    getData(); 
  }, [])
  return (
    <div className='App'>
      <TableCoins coins={coins}/>
      <Buttons/>
    </div>
  )
}

