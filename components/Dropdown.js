import React from 'react'

function Dropdown() {
  return (
    <div>
        <label className="text-lg  font-medium">
            Vilken valuta? <br></br>
            <select>
                <option value="bitcoin:">BTC</option>
                <option value="ethereum:">ETH</option>
                
            </select>
        </label>
    </div>
  )
}

export default Dropdown