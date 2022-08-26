import React, { useState } from "react";
import Dropdown from "./Dropdown";

function TransactionButton(props) {
  return (
    <div>
      <form>
        {/* <div className="text-lg">
        <p>SEK</p>
        <input
            ref={props.amountRef}
            type="text">
  </input> 
  </div> 


            <p>Wallet Address</p>
      <input
        ref={props.addressRef}
        type="text"  
      ></input> */}

        {/*   <a class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring" href="/download">
  <span class="absolute inset-0 border border-black group-active:border-black"></span>
  <span onClick={ 
          props.handleClick
        } 
        class= "block px-12 py-3 transition-transform bg-black border border-black active:border-black active:bg-black group-hover:-translate-x-1 group-hover:-translate-y-1">
    Transfer
  </span>
    </a> */}
      </form>

      <div className="max-w-screen-xl px-5 py-3 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="font-montserrat text-xl font-bold text-center text-indigo-600 sm:text-4xl">
            Köp krypto enkelt!
          </h1>

          <form
            action=""
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p className="text-lg font-medium"></p>

            <div>
              <label for="email" className="text-lg text-black font-medium">
                Hur mycket vill du köpa?
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="SEK"
                  ref={props.amountRef}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-slate-400 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <Dropdown
                label="Vilken valuta?"
                currency={props.currency}
                currencies={props.currencies}
                handleCurrencyChange={props.handleCurrencyChange}
              />
            </div> 

           <div>
              <div className="pt-3">
                <label for="password" className="text-lg text-black font-medium ">
                  Vad är din kryptoadress?
                </label>
              </div>

              <div className="relative mt-1">
                <input
                  type="text"
                  ref={props.addressRef}
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Adress"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-slate-400 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </span>
              </div>
            </div> 

            <a
              className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
              href="/download"
            >
              <span className="absolute inset-0 border rounded-md border-indigo-600 group-active:border-indigo-600"></span>
              <span
                onClick={props.handleClick}
                className="block px-12 py-3 rounded-md transition-transform bg-indigo-600 border border-indigo-600 active:border-bgyellow active:bg-indigo-600 group-hover:-translate-x-1 group-hover:-translate-y-1"
              >
                Köp!
              </span>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TransactionButton;
