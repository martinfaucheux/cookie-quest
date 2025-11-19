"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

interface AuthButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

function AuthButton({ onClick, children, image }: AuthButtonProps) {
  return (
    <button
      type="button"
      className={`mx-auto mt-2 p-2 rounded cursor-pointer transition duration-300 border flex flex-row items-center gap-2 text-amber-900 bg-white border-orange-900 hover:bg-orange-200 ${
        image ? "flex flex-row items-center gap-2" : ""
      }`}
      onClick={onClick}
    >
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 20}
          height={image.height || 20}
        />
      )}
      <span>{children}</span>
    </button>
  );
}

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
              <AuthButton
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </AuthButton>
            </>
          ) : (
            <>
              <p className="text-amber-900 text-center">
                Your quest for the best cookies starts here
              </p>
              <AuthButton
                onClick={(e) => {
                  e.preventDefault();
                  signIn("google", { callbackUrl: "/cookies" });
                }}
                image={{
                  src: "/google-logo.png",
                  alt: "Google Logo",
                  width: 20,
                  height: 20,
                }}
              >
                Sign in with Google
              </AuthButton>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
