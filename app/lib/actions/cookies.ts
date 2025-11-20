"use server";

import { z } from "zod";
import Cookie from "@/app/lib/models/models";
import { redirect } from "next/dist/client/components/navigation";
import { revalidatePath } from "next/cache";
import { put, del } from "@vercel/blob";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

// Image validation constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export type CreateCookieState = {
  errors?: {
    name?: string[];
    description?: string[];
    image?: string[];
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
  // Get the current user session
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return {
      errors: {},
      message: "You must be logged in to create a cookie.",
    };
  }
  const validatedFields = CookieFormSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
        image: undefined,
      },
      message: "Missing Fields. Failed to Create Cookie.",
    };
  }
  const { name, description } = validatedFields.data;

  // Handle image upload
  const imageFile = formData.get("image") as File | null;
  let imageUrl: string | null = null;

  if (imageFile && imageFile.size > 0) {
    // Validate image file
    if (!ACCEPTED_IMAGE_TYPES.includes(imageFile.type)) {
      return {
        errors: {
          name: undefined,
          description: undefined,
          image: ["Please upload a valid image file (JPEG, PNG, or WebP)"],
        },
        message: "Invalid image format.",
      };
    }

    if (imageFile.size > MAX_FILE_SIZE) {
      return {
        errors: {
          name: undefined,
          description: undefined,
          image: ["Image file size must be less than 5MB"],
        },
        message: "Image file too large.",
      };
    }

    try {
      // Upload to Vercel Blob
      const filename = `cookie-${Date.now()}-${imageFile.name}`;
      const blob = await put(filename, imageFile, {
        access: "public",
      });

      imageUrl = blob.url;
    } catch (error) {
      console.error("Image upload failed:", error);
      return {
        errors: {
          name: undefined,
          description: undefined,
          image: ["Failed to upload image. Please try again."],
        },
        message: "Image upload failed.",
      };
    }
  }

  try {
    await Cookie.create({
      name,
      description,
      imageUrl,
      createdBy: session.user.id,
    });
  } catch (error) {
    console.error("Failed to create cookie:", error);
    return {
      errors: {},
      message: "Failed to create cookie. Please try again.",
    };
  }

  revalidatePath("/cookies");
  redirect("/cookies");
}

export async function deleteCookie(id: string) {
  const cookie = await Cookie.findById(id);

  if (cookie) {
    // Only delete from Vercel Blob if the image URL is from Vercel Blob
    if (
      cookie.imageUrl &&
      cookie.imageUrl.includes("blob.vercel-storage.com")
    ) {
      try {
        await del(cookie.imageUrl);
      } catch (error) {
        console.error("Failed to delete image from Vercel Blob:", error);
        // Continue with cookie deletion even if image deletion fails
      }
    }
    await Cookie.deleteOne({ _id: id });
    revalidatePath("/cookies");
    redirect("/cookies");
  }
}
