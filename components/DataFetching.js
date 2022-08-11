import React, { useState, useEffect} from 'react'
import axios from 'axios';
import TransactionButton from '../components/TransactionButton'

function DataFetching() {

    const [posts, setPosts] = useState([]);
    const [amount, setAmount] = useState(0)

    console.log("parent" + amount)

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer TEST-SK-6C9AXWAX-YZ976B2W-TGD9B6R2-JD6ACY3P'
        },
        body: JSON.stringify({referrerAccountId: 'AC_PD7YFA9LEPA', 
                              sourceCurrency: 'SEK',
                              amount: {amount}
                            })
      };

      const handleClick = () => {
        
        setAmount(current => current + num);
        console.log("parent" + index);
      }

        useEffect(() => {
        fetch('https://api.testwyre.com/v3/orders/reserve', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        }, [])

  return (
    <div>
        <ul>
         <TransactionButton DataFetching={DataFetching} handleClick={handleClick} amount={amount} setAmount={setAmount}/>
        </ul>
    </div>
  )
}

export default DataFetching