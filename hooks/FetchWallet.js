import { useState, useEffect, useRef } from "react";

function FetchWallet(amount, address) {
  const [wallet, setWallet] = useState({});
  


  // headers etc for API call
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer TEST-SK-6C9AXWAX-YZ976B2W-TGD9B6R2-JD6ACY3P",
    },
    body: JSON.stringify({
    /* dest: address, */
    redirectUrl: 'https://www.sendwyre.com/success',
    autoRedirect: true,
    amount: amount,
    sourceCurrency: 'SEK',
    referrerAccountId: 'AC_PD7YFA9LEPA'
        
    }),
  };

  // API call
 /* useEffect(() => {
    fetch("https://api.testwyre.com/v3/orders/reserve", options)
      .then((response) => response.json())
      .then((response) => setWallet(response))
      .catch((err) => console.error(err));
  }, [amount]); */

  const useFetchNotOnMount = () => {
    const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current === true) {
        console.log(address)
        fetch("https://api.testwyre.com/v3/orders/reserve", options)
        .then((response) => response.json())
        .then((response) => setWallet(response))
        .catch((err) => console.error(err));
    } else {
      isMounted.current = true;
    }
  }, [amount]);
}

useFetchNotOnMount();

  return wallet;
}

  


export default FetchWallet;
