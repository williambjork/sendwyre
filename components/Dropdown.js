import React from 'react'
import { urlToHttpOptions } from 'url'

function Dropdown(props) {
  return (
    <div>
        <label className="text-lg  font-medium">
            {props.label} <br></br>
            <select value={props.currency} onChange={props.handleCurrencyChange}>
            {props.currencies.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))};
                
            </select>
        </label>
        
    </div>
  )
}

export default Dropdown