import React, { useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {

    const [posts, setPosts] = useState([]);

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer TEST-SK-6C9AXWAX-YZ976B2W-TGD9B6R2-JD6ACY3P'
        },
        body: JSON.stringify({referrerAccountId: 'AC_PD7YFA9LEPA'})
      };

    useEffect(() => {
      fetch('https://api.testwyre.com/v3/orders/reserve', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
    }, [])

  return (
    <div>
        <ul>
            {/*
                posts.map(post => <li key={post.id}>{post.title}</li>)
  */}
        </ul>
    </div>
  )
}

export default DataFetching