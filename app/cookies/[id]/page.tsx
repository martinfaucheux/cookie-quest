import Image from "next/image";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchCookieById } from "@/app/lib/data";
import { Button } from "@/app/ui/button";
import { DeleteCookieButton } from "@/app/ui/cookies/deleteButton";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const cookie = await fetchCookieById(id);

  if (!cookie) {
    return <div className="p-4">Cookie non trouvé</div>;
  }

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className=" p-4 max-w-6xl md:h-screen ">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Cookies", href: "/cookies" },
            { label: cookie.name, href: `/cookies/${cookie.id}`, active: true },
          ]}
        />
        <div className="flex flex-col w-full md:flex-row ">
          {/* Image container - full width on mobile, left side on desktop */}
          <div className="flex items-start justify-center w-full mb-6 md:mb-0 md:w-1/3 md:h-full">
            <Image
              src={cookie.imageUrl ?? "/cookie-icon.svg"}
              alt={cookie.name}
              width="400"
              height="400"
              className="max-w-full max-h-full object-contain rounded"
            />
          </div>

          {/* Text content - below image on mobile, right side on desktop */}
          <main className="w-full md:w-2/3 md:p-8 md:flex md:flex-col md:justify-start">
            <h1 className="text-2xl font-bold mb-4 md:text-3xl text-amber-900">
              {cookie.name}
            </h1>
            <p className="text-gray-700 leading-relaxed grow">
              {cookie.description}
            </p>
            <div className="flex justify-end mt-4">
              <div className="w-auto">
                <DeleteCookieButton
                  id={cookie.id}
                  createdBy={cookie.createdBy}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
