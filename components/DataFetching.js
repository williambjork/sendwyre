import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionButton from "../components/TransactionButton";
import FetchWallet from "../hooks/FetchWallet";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [amount, setAmount] = useState(0);

  const wallet = FetchWallet(amount);

  console.log("parent" + amount);
  console.log("saved" + wallet);

  const handleClick = () => {
    console.log("clicked");

    setAmount((current) => current + num);
    console.log("parent" + index);
  };

  return (
    <div>
      <ul>
        <TransactionButton
          DataFetching={DataFetching}
          handleClick={handleClick}
          amount={amount}
          setAmount={setAmount}
        />
      </ul>
      <button
        type="button"
        onClick={() => {
          handleClick;
        }}
      >
        test
      </button>
      <div>{wallet.url}</div>
      <div>{wallet.amount}</div>
    </div>
  );
}

export default DataFetching;
