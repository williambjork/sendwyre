import React from 'react'
import { useSession, signOut } from "next-auth/react";

function account() {
    const {data: session, status} = useSession({required: true})
  return (
    <div>account</div>
  )
}

export default account