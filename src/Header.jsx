import React from 'react';
import './Header.css';


export default function Header({currencys, fun, cur}){
  return (
    <header className='app-header'>
      <p>Crypto Stadistics</p>
      <div className='select-button'>
      <select value={cur} name="coinSelect" id="coinSelect" onChange={_ => {fun(document.getElementById("coinSelect").value)}}>
        {currencys.map((item, index) => <option value={item} key={index} >{item}</option>)}  
      </select>
      </div>
    </header>
  )
}