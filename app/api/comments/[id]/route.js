import connectMongoDB from "@/libs/mongodb";
import Article from "@/models/article";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user, content, postId } = await req.json();

  await connectMongoDB();
  await Comment.create({ user, content, postId });
  return NextResponse.json({ message: "Comment created" }, { status: 201 });
}
