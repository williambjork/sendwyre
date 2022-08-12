import React from "react";

function TransactionButton(props) {
  return (
    <div>
        <form>
      <input
        type="text"
        value={props.amount}
        onChange={(e) => props.setAmount(e.target.value)}
      ></input>
        <button
        
        onClick={ 
          props.handleClick
        }
      >
        Send
      </button>
      </form>
    </div>
    
  );
}

export default TransactionButton;
