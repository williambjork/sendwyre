import React from "react";
import { useSession, signOut } from "next-auth/react";
import AccountHeader from "../components/AccountHeader";
import { useRouter } from "next/router";
import LegalLinks from "../components/LegalLinks";

function account() {
  const { data: session, status } = useSession({ required: true });

  const router = useRouter();

  const handleClick = () => {
    router.push('/')
  }


  return (
    <div
      className="bg-gradient-to-br from-bgblue-100
    to-bgblue-200 flex min-h-screen flex-col items-center justify-center"
    >
      <header>
        
        <div className="absolute top-5 right-8">
            <AccountHeader session={session} />
        </div>
        
        <div onClick={handleClick} className="absolute top-5 left-8 hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        

      </header>
      <main
        className="
                   bg-[url(https://i.postimg.cc/nr89xSmc/gridgrid2opac2.png)] min-h-screen bg-cover flex w-full flex-3 flex-col items-center justify-center px-20 text-center"
      >
        <div className="relative block items-center p-10 border border-gray-100 shadow-xl bg-white rounded-xl">
          <img
            className="h-30 w-30 content-center rounded-full top-3 "
            src={session?.user?.image!}
            alt=""
          />

          <div className="mt-4 text-gray-500 sm:pr-8 pt-10">
            <h5 className="mt-4 text-xl font-bold text-gray-900">
              {session?.user?.name}
            </h5>

            <p className="hidden mt-2 text-sm sm:block">
              {session?.user?.email}
            </p>
          </div>

          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </main>

      <footer>
        <LegalLinks />
      </footer>
      
    </div>
  );
}

export default account;
