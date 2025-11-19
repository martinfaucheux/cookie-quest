"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

interface UserDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
  };
}

export const UserDropdown = ({ user }: UserDropdownProps) => {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
      <div className="py-1">
        <div className="px-4 py-2 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>

        <Link
          href="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Profile
        </Link>

        <Link
          href="/settings"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Settings
        </Link>

        <hr className="my-1" />

        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
