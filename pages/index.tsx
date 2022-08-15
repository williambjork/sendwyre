import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import DataFetching from '../components/DataFetching'




const Home: NextPage = () => {

 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-3 flex-col items-center justify-center px-20 text-center">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div className="mx-auto max-w-md">
          <DataFetching />
          </div>
          
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </footer>
    </div>
  )
}

export default Home
