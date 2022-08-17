import { useState, useEffect, useRef } from "react";
import { Dropdown } from '../components/Dropdown';

function FetchWallet(amount, address, currency, currencyShort) {
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
        referrerAccountId: 'AC_PD7YFA9LEPA',
        amount: amount,
        sourceCurrency: 'SEK',
        dest: currency + address,
        autoRedirect: true,
        redirectUrl: 'https://www.sendwyre.com/success',
        destCurrency: currencyShort
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
        console.log(address);
        fetch("https://api.testwyre.com/v3/orders/reserve", options)
          .then((response) => response.json())
          .then((response) => setWallet(response))
          .catch((err) => console.error(err));
      } else {
        isMounted.current = true;
      }
    }, [amount, address]);
  };

  useFetchNotOnMount();

  return wallet;
}

export default FetchWallet;
