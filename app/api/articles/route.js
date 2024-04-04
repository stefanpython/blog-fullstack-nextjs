import connectMongoDB from "@/libs/mongodb";
import Article from "@/models/article";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, content, authorName, image } = await req.json();

  await connectMongoDB();
  await Article.create({ title, content, authorName, image });
  return NextResponse.json({ message: "Article created" }, { status: 201 });
}

export async function GET(req) {
  await connectMongoDB();
  const articles = await Article.find();
  return NextResponse.json({ articles });
}
