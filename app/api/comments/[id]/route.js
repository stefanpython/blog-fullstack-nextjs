import connectMongoDB from "@/libs/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user, content, postId } = await req.json();

  await connectMongoDB();
  await Comment.create({ user, content, postId });
  return NextResponse.json({ message: "Comment created" }, { status: 201 });
}

export async function GET(req, { params }) {
  const { id } = params;

  await connectMongoDB();
  const comments = await Comment.find({ postId: id });
  return NextResponse.json({ comments }, { status: 200 });
}
