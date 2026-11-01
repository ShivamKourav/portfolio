import "dotenv/config";
import { connectDatabase } from "../config/db.js";
import User from "../models/User.js";

async function updateAdminName() {
  await connectDatabase();

  const email = process.env.ADMIN_EMAIL.trim().toLowerCase();

  const user = await User.findOneAndUpdate(
    { email, role: "admin" },
    { $set: { name: "Shivam Kourav" } },
    { returnDocument: "after" }
  );

  if (!user) {
    throw new Error("Admin not found");
  }

  console.log("Admin name updated to Shivam Kourav");
}

updateAdminName()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });