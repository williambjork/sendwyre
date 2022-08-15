import React from "react";

function TransactionButton(props) {
  return (
    <div>
        <form>
            <p>amount</p>
      <input
        ref={props.amountRef}
        type="text"  
      ></input>

            <p>wallet</p>
      <input
        ref={props.addressRef}
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
