import Link from "next/link";
import { LoginUserBadge } from "./loginUserBadge";

export const TopBar = () => {
  return (
    <div className="bg-[#f59e0b] p-4 flex flex-row items-center">
      <Link href="/cookies" className="text-2xl  text-white font-bold grow">
        🍪 Cookie Quest
      </Link>
      <LoginUserBadge />
    </div>
  );
};
