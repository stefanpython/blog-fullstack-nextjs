import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const admin = await User.find({ email: "admin@admin.com" });
  return NextResponse.json({ admin }, { status: 200 });
}
