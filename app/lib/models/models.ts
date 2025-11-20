import mongoose, { Schema } from "mongoose";

const cookieSchema = new Schema(
  {
    name: String,
    description: String,
    imageUrl: String,
    createdBy: String,
  },
  {
    timestamps: true,
  }
);

const Cookie = mongoose.models.Cookie || mongoose.model("Cookie", cookieSchema);

export default Cookie;
