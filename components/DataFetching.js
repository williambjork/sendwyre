import React, { useState, useEffect} from 'react'
import axios from 'axios';
import TransactionButton from '../components/TransactionButton'
import FetchWallet from '../hooks/FetchWallet'

function DataFetching() {

    const [posts, setPosts] = useState([]);
    const [amount, setAmount] = useState(0);
     

   const wallet = FetchWallet(); 


    console.log("parent" + amount)
    console.log("saved" + wallet)

    

      const handleClick = () => {

        console.log("clicked")
        
        setAmount(current => current + num);
        console.log("parent" + index);
        
      }

      /*  useEffect(() => {
        fetch('https://api.testwyre.com/v3/orders/reserve', options)
            .then(response => response.json())
            .then(response => setWallet(response))
            .catch(err => console.error(err));
        }, []) */

  return (
    <div>
        <ul>
         <TransactionButton DataFetching={DataFetching} handleClick={handleClick} amount={amount} setAmount={setAmount}/>
        </ul>
        <button type="button" onClick={() =>
             {handleClick}}>test</button>
        <div>
            {wallet.url}
        </div>
    </div>
  )
}

export default DataFetching