import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import DataFetching from "../components/DataFetching";
import circledots from "../src/images/circledots.svg";
import { useSession, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const {data: session, status} = useSession({required: true})

  if (session) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800&family=Orbitron:wght@500&display=swap&display=swap"
          rel="stylesheet"
        />
        
      </Head>

      <header className="absolute top-5 right-8">
      <div className="flex cursor-pointer items-center space-x-3 rounded-full bg-black p-1 pr-2 text-white opacity-90 hover:opacity-80">
          <img
            className="h-10 w-10 rounded-full"
            src={session?.user.image}
            alt=""/>
          <h2>{session?.user.name}</h2>
          
        </div>
      </header>

      <div
        className="bg-gradient-to-br from-bgblue-100
    to-bgblue-200 flex min-h-screen flex-col items-center justify-center"
      >
        <main
          className="
                   bg-[url(https://i.postimg.cc/nr89xSmc/gridgrid2opac2.png)] min-h-screen bg-cover flex w-full flex-3 flex-col items-center justify-center px-20 text-center"
        >
          {/* <Image src={circledots} height={880} width={880}/> */}

          <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div className="mx-auto max-w-md">
              <DataFetching />
            </div>
          </div>
        </main>
      </div>
    </>
  ); 
  }
  
};

export default Home;
