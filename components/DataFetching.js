import React, { useState, useRef } from "react";
import axios from "axios";
import TransactionButton from "../components/TransactionButton";
import FetchWallet from "../hooks/FetchWallet";
import CurrencyDropDown from "../components/CurrencyDropDown";
import Router from "next/router";
import Image from "next/image";
import globe from "../src/images/bgearth.svg";

function DataFetching() {
  
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("u");
  const [ currency, setCurrency ] = useState();

  const amountRef = useRef(null);
  const addressRef = useRef(null);
  const currencyRef = useRef(null);

  //Referencing custom hook
  const wallet = FetchWallet(amount, address, currency);

  console.log("Amount: " + amount);
  console.log("Address: " + address);
  console.log("saved" + wallet);
  console.log("currency is: " + currency)

  const handleClick = (e) => {
    e.preventDefault();
    setAmount(amountRef.current.value);
    setAddress(addressRef.current.value);
    console.log("clicked");
  };

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

  return (
    <div>
      <div className="col-span-2">
        <Image src={globe} height={180} width={180} />
        <ul>
          <TransactionButton
            DataFetching={DataFetching}
            handleClick={handleClick}
            amount={amount}
            amountRef={amountRef}
            setAmount={setAmount}
            address={address}
            addressRef={addressRef}
            handleCurrencyChange={handleCurrencyChange}
          />
        </ul>
      </div>

      {/* } <div>
        <CurrencyDropDown />
  </div> */}
<p>Currency is {currency}</p>
      <div className="underline overflow-hidden">
        <a href={wallet.url}>Redirect</a>
      </div>
      <div className="text-xs ">
        <a href>{wallet.url}</a>
      </div>
      <div>{wallet.amountRef}</div>
    </div>
  );
}

export default DataFetching;
