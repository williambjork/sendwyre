import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import DataFetching from '../components/DataFetching'




const Home: NextPage = () => {

 

  return (
    <div className="bg-gradient-to-br from-bgblue-100
    to-bgblue-200 flex min-h-screen flex-col items-center justify-center py-2">
      

      <main className="
                   flex w-full flex-3 flex-col items-center justify-center px-20 text-center">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div className="mx-auto max-w-md">
          <DataFetching />
          </div>
          
        </div>
      </main>
    </div>
  )
}

export default Home
