import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 to-orange-100">
      <main className="bg-orage-100 rounded-lg shadow-xl max-w-[300px] w-full">
        <h1 className="bg-orange-200  text-amber-900 rounded-t-lg font-bold text-4xl text-center p-4">
          🍪 Cookie Quest
        </h1>
        <form className="flex flex-col p-4 gap-2">
          <label className="ml-2">email</label>
          <input
            type="email"
            className="bg-white border-amber-900 rounded border"
          />
          <label className="ml-2">password</label>
          <input
            type="password"
            className="bg-white border-amber-900 rounded border"
          />
          <button className="mx-auto mt-4 p-2 rounded bg-orange-300">
            Login
          </button>
        </form>
      </main>
    </div>
  );
}
