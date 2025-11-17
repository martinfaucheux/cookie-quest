import { cookies } from "../lib/placeholder-data";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cookies List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cookies.map((cookie) => (
          <div key={cookie.id} className="border rounded p-2">
            <img
              src={cookie.image_url}
              alt={cookie.name}
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="font-semibold">{cookie.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
