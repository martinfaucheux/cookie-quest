"use client";

import { deleteCookie } from "@/app/lib/actions/cookies";
import { Button } from "@/app/ui/button";
import { useSession } from "next-auth/react";

export function DeleteCookieButton({ id }: { id: string }) {
  const { data: session } = useSession();
  if (!session) {
    return null;
  }

  const deleteCookieWithId = deleteCookie.bind(null, id);
  return <Button onClick={deleteCookieWithId}>Delete Cookie</Button>;
}
