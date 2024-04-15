import connectMongoDB from "@/libs/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Comment.findByIdAndDelete(id);
  return NextResponse.json({ message: "Comment deleted" }, { status: 200 });
}
