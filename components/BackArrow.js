import React from 'react'
import { useRouter } from "next/router";

function BackArrow() {

const router = useRouter();

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div onClick={handleClick} className="absolute top-5 left-8 hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
  )
}

export default BackArrow