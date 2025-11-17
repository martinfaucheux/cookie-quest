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
    <div className="w-full min-h-screen flex justify-center">
      <div className="flex flex-col w-full max-w-6xl p-4 md:flex-row md:h-screen">
        {/* Image container - full width on mobile, left side on desktop */}
        <div className="flex items-start justify-center w-full mb-6 md:mb-0 md:w-1/3 md:h-full md:pt-8">
          <Image
            src={cookie.image_url}
            alt={cookie.name}
            width="400"
            height="400"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>

        {/* Text content - below image on mobile, right side on desktop */}
        <main className="w-full md:w-2/3 md:p-8 md:flex md:flex-col md:justify-start">
          <h1 className="text-2xl font-bold mb-4 md:text-3xl">{cookie.name}</h1>
          <p className="text-gray-700 leading-relaxed">{cookie.description}</p>
        </main>
      </div>
    </div>
  );
}
