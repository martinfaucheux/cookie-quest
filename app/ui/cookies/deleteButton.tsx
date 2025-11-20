"use client";

import { deleteCookie } from "@/app/lib/actions/cookies";
import { Button } from "@/app/ui/button";
import { useSession } from "next-auth/react";

export function DeleteCookieButton({
  id,
  createdBy,
}: {
  id: string;
  createdBy: string;
}) {
  const { data: session } = useSession();

  // Don't render if no session or user didn't create this cookie
  if (!session || session.user.id !== createdBy) {
    return null;
  }

  const deleteCookieWithId = deleteCookie.bind(null, id);
  return <Button onClick={deleteCookieWithId}>Delete Cookie</Button>;
}
