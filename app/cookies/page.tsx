import { cookies } from "../lib/placeholder-data";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cookies List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {cookies.map((cookie) => (
          <div
            key={cookie.id}
            className="rounded overflow-hidden bg-orange-100"
          >
            <div className="relative w-full pb-[100%]">
              <img
                src={cookie.image_url}
                alt={cookie.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <h2 className="font-semibold text-sm truncate">{cookie.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
