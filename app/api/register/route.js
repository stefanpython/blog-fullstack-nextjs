import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();

    // Check for existing user with email and ID
    const existingUser = await User.findOne({ email }).select("_id");

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email and ID already exists." },
        { status: 400 }
      );
    }

    // Create user if not found
    await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "User registered" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
}
