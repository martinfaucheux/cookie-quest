"use server";

import { z } from "zod";
import Cookie from "@/app/lib/models/models";
import { redirect } from "next/dist/client/components/navigation";
import { revalidatePath } from "next/cache";

export type CreateCookieState = {
  errors?: {
    name?: string[];
    description?: string[];
  };
  message?: string | null;
};

const CookieFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export async function createCookie(
  prevState: CreateCookieState,
  formData: FormData
) {
  const validatedFields = CookieFormSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Cookie.",
    };
  }

  const { name, description } = validatedFields.data;

  Cookie.create({
    name,
    description,
  });

  revalidatePath("/cookies");
  redirect("/cookies");
}
