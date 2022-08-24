import React from "react";
import { useSession, signOut } from "next-auth/react";
import AccountHeader from "../components/AccountHeader";
import BackArrow from "../components/BackArrow";
import LegalLinks from "../components/LegalLinks";

function account() {
  const { data: session, status } = useSession({ required: true });

  


  return (
    <div
      className="bg-gradient-to-br from-bgblue-100
    to-bgblue-200 flex min-h-screen flex-col items-center justify-center"
    >
      <header>
        
        <div className="absolute top-5 right-8">
            <AccountHeader session={session} />
        </div>
        
        <BackArrow />
        
      </header>

      <main
        className="
                   bg-[url(https://i.postimg.cc/nr89xSmc/gridgrid2opac2.png)] min-h-screen bg-cover flex w-full flex-3 flex-col items-center justify-center px-10 text-center"
      >
        <div className="relative block  p-10 border border-gray-100 shadow-xl rounded-xl
                        bg-gradient-to-b from-white
                        to-slate-100 ">

          
            <img
              className="h-30 w-30 ml-6 rounded-full  "
              src={session?.user?.image!}
              alt=""
            />
          
          <div className=" text-gray-500  ">
            <h5 className="mt-4 text-xl  font-bold text-gray-900">
             <p> {session?.user?.name} </p>
            </h5>

            <p className="hidden mt-2 items-center text-sm sm:block">
              {session?.user?.email}
            </p>
          </div>

          <div className="pt-3">
            <button className="hover:underline font-bold" onClick={() => signOut()}>Sign out</button>
          </div>
        </div>
      </main>

      <footer>
        <LegalLinks />
      </footer>

    </div>
  );
}

export default account;
