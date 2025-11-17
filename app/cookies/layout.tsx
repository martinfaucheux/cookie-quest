import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#f59e0b] text-2xl text-center text-white p-4 font-bold">
        <Link href="/cookies">🍪 Cookie Quest</Link>
      </div>
      <main className="grow">{children}</main>
    </div>
  );
}
