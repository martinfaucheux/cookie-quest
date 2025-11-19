"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export const LoginUserBadge = () => {
  const { data: session } = useSession();

  return session && session.user ? (
    <div className="flex flex-row items-center gap-2">
      <Image
        src={session.user.image || "/default-avatar.png"}
        alt="User Avatar"
        width={32}
        height={32}
        className="rounded-full border-2 border-white"
      />
      <span className="text-white">{session.user.name}</span>
    </div>
  ) : (
    <Link href="/login">
      <button className="text-white px-4 py-2 rounded">Login</button>
    </Link>
  );
};
