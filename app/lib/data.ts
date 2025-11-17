import Cookie from "./models/models";
import connectMongoDB from "./mongodbConnection";

export async function fetchCookies() {
  try {
    await connectMongoDB();
    const cookies = await Cookie.find();
    return cookies;
  } catch (error) {
    console.error("Error fetching cookies:", error);
    throw error;
  }
}

export async function fetchCookieById(id: string) {
  try {
    await connectMongoDB();
    const cookie = await Cookie.findById(id);
    return cookie;
  } catch (error) {
    console.error(`Error fetching cookie with id ${id}:`, error);
    throw error;
  }
}
