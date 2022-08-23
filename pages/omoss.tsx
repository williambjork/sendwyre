import React from "react";
import LegalLinks from "../components/LegalLinks";
import AccountHeader from "../components/AccountHeader";
import BackArrow from "../components/BackArrow";
import {  useSession } from "next-auth/react";

function Omoss() {

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
                   bg-[url(https://i.postimg.cc/nr89xSmc/gridgrid2opac2.png)] min-h-screen bg-cover flex w-full flex-3 flex-col items-center justify-center px-20 text-center"
      >
        <a
          className="relative block p-8 mt-9 mb-9 border bg-white border-gray-100 shadow-xl rounded-xl"
          href=""
        >
          

            <h5 className="mt-4 text-xl font-bold text-gray-900">
              Om oss
            </h5>

            <p className="hidden mt-2 text-sm sm:block">
              You can manage phone, email and chat conversations all from a
              single mailbox. You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, <br/> <br/> email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.
            </p>

            <h5 className="mt-4 text-xl font-bold text-gray-900">
              Bajs
            </h5>

            <p className="hidden mt-2 text-sm sm:block">
              You can manage phone, email and chat conversations all from a
              single mailbox. You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, <br/> <br/> email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.
            </p>

            <p className="hidden mt-2 text-sm sm:block">
              You can manage phone, email and chat conversations all from a
              single mailbox. You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone, email and chat conversations all from a
              single mailbox.You can manage phone,
            </p>
            
          
        </a>
      </main>

      <footer>
          <LegalLinks  />
        </footer>

    </div>
  )
}

export default Omoss