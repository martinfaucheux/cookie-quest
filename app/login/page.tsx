"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white to-orange-200">
      <main className="bg-orange-100 rounded-lg shadow-xl max-w-[300px] w-full">
        <h1 className="bg-orange-200  text-amber-900 rounded-t-lg font-bold text-4xl text-center p-4">
          🍪 Cookie Quest
        </h1>
        <div className="flex flex-col p-4 gap-2">
          {session?.user ? (
            <>
              <p className="text-amber-900 text-center">
                Yo are signed in as {session.user.email}
              </p>
              <button
                type="button"
                className="text-amber-900 mx-auto mt-2 p-2 rounded bg-orange-300"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <p className="text-amber-900 text-center">
                Your quest for the best cookies starts here
              </p>
              <button
                type="button"
                className="text-amber-900 mx-auto mt-2 p-2 rounded bg-orange-300"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("google", { callbackUrl: "/cookies" });
                }}
              >
                Sign in with Google
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
