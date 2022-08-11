import { useState, useEffect } from 'react'

function FetchWallet() {
    const [wallet, setWallet] = useState({})

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer TEST-SK-6C9AXWAX-YZ976B2W-TGD9B6R2-JD6ACY3P'
        },
        body: JSON.stringify({referrerAccountId: 'AC_PD7YFA9LEPA', 
                              sourceCurrency: 'SEK',
                              
                            })
      };
   
    useEffect(() => {
       fetch('https://api.testwyre.com/v3/orders/reserve', options)
            .then(response => response.json())
            .then(response => setWallet(response))
            .catch(err => console.error(err));
        }, []);

        return wallet
}

export default FetchWallet;