import React, { useState, useRef } from "react";
import axios from "axios";
import TransactionButton from "../components/TransactionButton";
import FetchWallet from "../hooks/FetchWallet";
import CurrencyDropDown from "../components/CurrencyDropDown";
import Router from 'next/router'

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [amount, setAmount] = useState(0);

  const amountRef = useRef(null);

  //Referencing custom hook
  const wallet = FetchWallet(amount);

  console.log("parent" + amount);
  console.log("saved" + wallet);

  const handleClick = (e) => {
    e.preventDefault();
    setAmount(amountRef.current.value);
    Router.push(wallet)
    console.log("clicked"); /*
    setAmount((current) => current + num);
    console.log("parent" + index); */
  };

  return (
    <div>
     <ul>
        <TransactionButton
          DataFetching={DataFetching}
          handleClick={handleClick}
          amount={amount}
          amountRef={amountRef}
          setAmount={setAmount}
        />
     </ul> 

     {/* } <div>
        <CurrencyDropDown />
  </div> */}
    
      <div><a href={wallet.url}>Transfer</a></div>
      <div><a href>{wallet.url}</a></div>
      <div>{wallet.amountRef}</div>
    </div>
  );
}

export default DataFetching;
