import React, { useState } from "react";

function TransactionButton(props) {
  return (
    <div>
      <input
        type="text"
        value={props.amountRef}
        onChange={(e) => props.setAmount(e.target.value)}
      ></input>
        <button
        type="button"
        onClick={() => {
          props.handleClick;
        }}
      >
        Send
      </button>
    </div>
  );
}

export default TransactionButton;
