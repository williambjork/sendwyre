import React from "react";

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

      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Köp krypto enkelt!</h1>

    

    <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
      <p class="text-lg font-medium"></p>

      <div>
        <label for="email" class="text-sm font-medium">Hur mycket vill du köpa?</label>



        <div class="relative mt-1">
          <input
            type="text"
            
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="SEK"
            ref={props.amountRef}
            
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="text-sm font-medium">Vad är din krypto plånboksadress?</label>

        <div class="relative mt-1">
          <input
            type="password"
            id="password"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Adress"
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 4 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

       <a class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring" href="/download">
  <span class="absolute inset-0 border border-black group-active:border-black"></span>
  <span onClick={ 
          props.handleClick
        } 
        class= "block px-12 py-3 transition-transform bg-bgblue-200 border border-black active:border-black active:bg-bgblue-100 group-hover:-translate-x-1 group-hover:-translate-y-1">
    Transfer
  </span>
</a>

      
    </form>
  </div>
</div>
    </div>
    
  );
}

export default TransactionButton;
