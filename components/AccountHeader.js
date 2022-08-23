import React from 'react'
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router'



function AccountHeader(props) {

const router = useRouter();

function handleClick() {
    console.log('clicked')
    router.push('/account')
}
    
  return (
    <div onClick={handleClick} className="flex cursor-pointer items-center space-x-3 rounded-full 
                                            bg-gradient-to-b from-white
                                          to-slate-200 p-1 pr-2 
                                          text-black font-medium opacity-100 hover:bg-slate-200">
          <img
            className="h-10 w-10 rounded-full"
            src={props.session?.user.image}
            alt=""/>
          <h2 className="pr-2">{props.session?.user.name}</h2>
          
        </div>
  )
}

export default AccountHeader