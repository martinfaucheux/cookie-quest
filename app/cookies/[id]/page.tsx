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
    <div className="p-4 flex flex-row">
      <div className="w-64 h-64 mb-4">
        <Image
          src={cookie.image_url}
          alt={cookie.name}
          width="400"
          height="400"
          className="rounded"
        />
      </div>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">{cookie.name}</h1>
        <p>{cookie.description}</p>
      </main>
    </div>
  );
}
