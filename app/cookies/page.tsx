import Image from "next/image";
import { cookies } from "../lib/placeholder-data";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cookies List</h1>
      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {cookies.map((cookie) => (
          <Link key={cookie.id} href={`/cookies/${cookie.id}`}>
            <div
              key={cookie.id}
              className="rounded overflow-hidden bg-orange-100 cursor-pointer hover:bg-orange-200 transition-colors duration-500"
            >
              <div className="relative w-full pb-[100%] overflow-hidden">
                <Image
                  src={cookie.image_url}
                  alt={cookie.name}
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
    </div>
  );
}
