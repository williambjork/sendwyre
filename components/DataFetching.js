import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router'
import TransactionButton from "../components/TransactionButton";
import FetchWallet from "../hooks/FetchWallet";
import CurrencyDropDown from "../components/CurrencyDropDown";
import Router from "next/router";
import Image from "next/image";
import globe from "../src/images/bgearth.svg";

function DataFetching() {
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [currency, setCurrency] = useState(null);
  const [currencyShort, setCurrencyShort] = useState(null);

  const amountRef = useRef(null);
  const addressRef = useRef(null);
  const currencyRef = useRef(null);

  //Referencing custom hook
  const wallet = FetchWallet(amount, address, currency, currencyShort);

  console.log("Amount: " + amount);
  console.log("Address: " + address);
  console.log("saved" + wallet);
  console.log("currency is: " + currency);
  console.log("short: " + currencyShort);


  const handleClick = (e) => {
    e.preventDefault();
    setAmount(amountRef.current.value);
    setAddress(addressRef.current.value);
  };

   const handleCurrencyChange =  (e) => {
    setCurrency(e.target.value);
   
  };

  const  handleCurrencyShortChange = () => {
     if (currency === "ethereum:") {
        setCurrencyShort("ETH");
    }
    else if (currency === "bitcoin:") {
        setCurrencyShort("BTC"); 
    }  else if (currency === "dai:") {
        setCurrencyShort("DAI");
    } else { return }
    
  }

  // Redirect user when getting API response
  const router = useRouter();

  useEffect(() => {
    if (wallet.url != null) {
    router.push(wallet.url)
    } else { return }
  }, [wallet.url])

  const currencies = [
    { id: "1", label: 'BTC',  value: 'bitcoin:' },
    { id: "2", label: 'ETH',  value: 'ethereum:' },
    { id: "3", label: 'DAI',  value: 'dai:' }
];
  
  return (
    <div>
      <div className="col-span-2">
        <Image src={globe} height={160} width={160} />
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
            currencies={currencies}
            handleCurrencyShortChange={handleCurrencyShortChange}
            
          />
        </ul>
      </div>

 {/*
      <p>Currency is {currency}</p>
      <div className="underline overflow-hidden">
        <a href={wallet.url}>Redirect</a>
      </div>
      <div className="text-xs ">
        <a href>{wallet.url}</a>
      </div>
      <div>{wallet.amountRef}</div> */}
    </div> 
  );
}

export default DataFetching;
