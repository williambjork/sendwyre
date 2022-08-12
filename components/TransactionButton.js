import React from "react";

function TransactionButton(props) {
  return (
    <div>
        <form>
      <input
        ref={props.amountRef}
        type="text"
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
