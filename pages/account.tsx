import React from "react";
import { useSession, signOut } from "next-auth/react";
import AccountHeader from "../components/AccountHeader";

function account() {
  const { data: session, status } = useSession({ required: true });
  return (
    <div
      className="bg-gradient-to-br from-bgblue-100
    to-bgblue-200 flex min-h-screen flex-col items-center justify-center"
    >
      <header className="absolute top-5 right-8">
        <AccountHeader session={session} />
      </header>
      <main
        className="
                   bg-[url(https://i.postimg.cc/nr89xSmc/gridgrid2opac2.png)] min-h-screen bg-cover flex w-full flex-3 flex-col items-center justify-center px-20 text-center"
      >
        <a
          className="relative block p-10 border border-gray-100 shadow-xl bg-white rounded-xl"
          href=""
        >
          
          
          <img
            className="h-20 w-20  rounded-full absolute"
            src={session?.user.image}
            alt=""
          />

          <div className="mt-4 text-gray-500 sm:pr-8">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>

            <h5 className="mt-4 text-xl font-bold text-gray-900">
            {session?.user.name}
            </h5>

            <p className="hidden mt-2 text-sm sm:block">
            {session?.user.email}
            </p>
          </div>
        </a>
      </main>
    </div>
  );
}

export default account;
