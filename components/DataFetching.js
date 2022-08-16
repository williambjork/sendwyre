import React, { useState, useRef } from "react";
import axios from "axios";
import TransactionButton from "../components/TransactionButton";
import FetchWallet from "../hooks/FetchWallet";
import CurrencyDropDown from "../components/CurrencyDropDown";
import Router from 'next/router'
import Image from 'next/image'
import globe from '../src/images/bgearth.svg'


function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState('u');
 
  const isMounted = useRef('true');

  const amountRef = useRef(null);
  const addressRef = useRef(null);

  //Referencing custom hook
  const wallet = FetchWallet(amount, address);

  console.log("Amount: " + amount);
  console.log("Address: " + address);
  console.log("saved" + wallet);

  const handleClick = (e) => {
    e.preventDefault();
    setAmount(amountRef.current.value);
    setAddress(addressRef.current.value)
    console.log("clicked");
  };

  return (
    <div>
    <div className="col-span-2">
    <Image src={globe} height={180} width={180}/>
        <ul>
            <TransactionButton
            DataFetching={DataFetching}
            handleClick={handleClick}
            amount={amount}
            amountRef={amountRef}
            setAmount={setAmount}
            address={address}
            addressRef={addressRef}
            />
        </ul> 
     </div>

     {/* } <div>
        <CurrencyDropDown />
  </div> */}
    
      <div className="underline overflow-hidden"><a href={wallet.url}>Redirect</a></div>
      <div className="text-xs "><a href>{wallet.url}</a></div>
      <div>{wallet.amountRef}</div>
    </div>
  );
}

export default DataFetching;
