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
