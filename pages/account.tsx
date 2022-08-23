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
    </div>
  );
}

export default account;
