import React from 'react'
import { useRouter } from "next/router"

function LegalLinks() {

    const router = useRouter();

  return (

    <div className="absolute bottom-5 right-8 text-white">
        <a  className="pr-3 hover:opacity-80">Om oss</a>
        <a className="pr-3 hover:opacity-80">Terms of Service</a>
        <a className="hover:opacity-80">Privacy Policy</a>
    </div>

  )
}

export default LegalLinks