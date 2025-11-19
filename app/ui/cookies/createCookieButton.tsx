"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CreateCookieButton() {
  const { data: session } = useSession();

  return session?.user ? (
    <Link
      href="/cookies/create"
      className="p-2 rounded cursor-pointer transition duration-300 border flex flex-row items-center gap-2 text-amber-900 bg-white border-orange-900 hover:bg-orange-200"
    >
      Create Cookie
    </Link>
  ) : null;
}
