import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 to-orange-100">
      <main className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold text-center text-amber-900 mb-4">
          🍪 Cookie Quest
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Embark on a delicious adventure through the world of cookies.
          Discover, collect, and enjoy your favorite treats!
        </p>
        <Link
          href="/cookies"
          className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
        >
          Start Your Quest
        </Link>
      </main>
    </div>
  );
}
