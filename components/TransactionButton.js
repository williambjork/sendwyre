import React, { useState } from 'react'

function TransactionButton(props) {

  return (
    <div>
        <input type="text" value={props.amount} onChange={e => props.setAmount(e.target.value)}></input>
        <button type="button" onClick={() =>
             {props.handleClick}}>test</button>
    </div>
  )
}

export default TransactionButton