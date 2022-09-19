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
      Authorization: "Bearer TEST-AK-CX2DQ2HN-ZMUGHH7U-UMZ9A7HH-BL8VMYJQ",
    },
    body: JSON.stringify({
        referrerAccountId: 'AC_PD7YFA9LEPA',
        amount: amount,
        sourceCurrency: 'SEK',
        dest: currency + address,
        autoRedirect: false,
        redirectUrl: 'https://www.sendwyre.com/success',
        
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
