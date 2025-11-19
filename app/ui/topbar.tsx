import Link from "next/link";
import { LoginUserBadge } from "./loginUserBadge";

export const TopBar = () => {
  return (
    <div className="bg-[#f59e0b] flex flex-row items-center h-16">
      <Link
        href="/cookies"
        className="text-2xl p-4 text-white font-bold grow h-full"
      >
        🍪 Cookie Quest
      </Link>
      <LoginUserBadge />
    </div>
  );
};
