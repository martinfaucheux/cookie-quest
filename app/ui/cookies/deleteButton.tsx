import { deleteCookie } from "@/app/lib/actions/cookies";
import { Button } from "@/app/ui/button";

export function DeleteCookieButton({ id }: { id: string }) {
  const deleteCookieWithId = deleteCookie.bind(null, id);
  return <Button onClick={deleteCookieWithId}>Delete Cookie</Button>;
}
