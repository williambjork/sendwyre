import React from 'react'


function Dropdown(props) {
  return (
    <div>
        <label className="text-lg text-black font-medium">
            {props.label} <br></br>
            <select value={props.currency} onChange={props.handleCurrencyChange}>
            {props.currencies.map((option) => (
          <option key={props.currencies.id} value={option.value}>{option.label}</option>
        ))};
                
            </select>
        </label>
        
    </div>
  )
}

export default Dropdown