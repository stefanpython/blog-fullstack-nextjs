import connectMongoDB from "@/libs/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  await connectMongoDB();
  const comments = await Comment.find({ postId: id });
  return NextResponse.json({ comments }, { status: 200 });
}
