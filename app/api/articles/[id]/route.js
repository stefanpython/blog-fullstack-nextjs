import connectMongoDB from "@/libs/mongodb";
import Article from "@/models/article";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newContent: content,
    newAuthorName: authorName,
    newImage: image,
  } = await req.json();
  await connectMongoDB();
  await Article.findByIdAndUpdate(id, { title, content, authorName, image });
  return NextResponse.json({ message: "Article updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const article = await Article.findOne({ _id: id });
  return NextResponse.json({ article }, { status: 200 });
}
