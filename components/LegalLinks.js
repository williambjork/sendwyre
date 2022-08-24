import React from 'react'
import { useRouter } from "next/router"

function LegalLinks() {

    const router = useRouter();

    function handleOmossClick() {
        router.push("/omoss")
    }

    function handleTosClick() {
        router.push("/tos")
    }

    function handlePrivacyClick() {
        router.push("/privacy")
    }

  return (

    <div className="absolute text-sm bottom-5 right-8 text-white">
       {/* <a onClick={handleOmossClick} className="pr-3 hover:opacity-80">Om oss</a> */}
        <a onClick={handleTosClick}  className="pr-3 hover:opacity-80">Terms of Service</a>
        <a onClick={handlePrivacyClick} className="hover:opacity-80">Privacy Policy</a>
    </div>

  )
}

export default LegalLinks