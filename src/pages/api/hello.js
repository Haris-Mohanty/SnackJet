// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "@/utils/db";
import colors from "colors";

export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({ name: "John Doe" });
}
