import Image from "next/image";
import Link from "next/link";
import { fetchCookies } from "../lib/data";
import CreateCookieButton from "@/app/ui/cookies/createCookieButton";

export default async function Page() {
  const cookies = await fetchCookies();

  return (
    <div className="p-4">
      <div className="flex flex-row items-center mb-4">
        <h1 className="text-2xl font-bold grow">Cookies List</h1>
        <CreateCookieButton />
      </div>
      {cookies.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="mb-6">
            <Image
              src="/cookie-icon.svg"
              alt="Cookie icon"
              width={96}
              height={96}
              className="opacity-60"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No cookies found
          </h2>
          <p className="text-gray-500 mb-6 max-w-md">
            It looks like there are no cookies in our collection yet. Start by
            adding some delicious cookies to share with the community!
          </p>
          {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Add Your First Cookie
          </button> */}
        </div>
      ) : (
        <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {cookies.map((cookie) => (
            <Link key={cookie._id} href={`/cookies/${cookie._id}`}>
              <div
                key={cookie._id}
                className="rounded overflow-hidden bg-orange-100 cursor-pointer hover:bg-orange-200 transition-colors duration-500"
              >
                <div className="relative w-full pb-[100%] overflow-hidden">
                  <Image
                    src={cookie.imageUrl ?? "/cookie-icon.svg"}
                    alt={cookie.name ?? "Cookie"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                    className="object-cover transition-all duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-2">
                  <h2 className="font-semibold text-sm truncate">
                    {cookie.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </main>
      )}
    </div>
  );
}
