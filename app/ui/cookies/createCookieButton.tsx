"use client";

import { useSession } from "next-auth/react";

import CreateCookieModalButton from "./createCookieModal";

export default function CreateCookieButton() {
  const { data: session } = useSession();

  return session?.user ? <CreateCookieModalButton /> : null;
}
