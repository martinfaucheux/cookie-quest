import { cookies } from "../../lib/placeholder-data";
import Image from "next/image";
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const cookie = cookies.find((cookie) => cookie.id === id);

  if (!cookie) {
    return <div className="p-4">Cookie not found</div>;
  }

  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/4 h-full flex items-start justify-center bg-gray-50">
        <Image
          src={cookie.image_url}
          alt={cookie.name}
          width="400"
          height="400"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <main className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">{cookie.name}</h1>
        <p>{cookie.description}</p>
      </main>
    </div>
  );
}
