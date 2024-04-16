import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import moment from "moment";
import Comments from "@/components/Comments";

interface Article {
  _id: string;
  title: string;
  content: string;
  date: string;
  authorName: string;
  image: string;
}

interface ArticleParams {
  id: string;
}

interface Comment {
  _id: string;
  user: string;
  date: string;
  content: string;
}

const getArticleById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch article");
    }

    return res.json();
  } catch (error) {
    console.log("Error loding article", error);
  }
};

const getCommentsById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch comments");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading topics comments", error);
  }
};

export default async function Article({ params }: { params: ArticleParams }) {
  const { id } = params;
  const { article } = await getArticleById(id);
  const { comments } = await getCommentsById(id);

  return (
    <div className="flex flex-col items-center py-4 ">
      <div className="flex flex-wrap gap-10">
        <div className="flex  py-10 max-w-[77em]">
          <div className="flex flex-col px-1">
            <h1 className="text-4xl pb-6">{article.title}</h1>

            <div className="flex items-center pb-4 text-xl">
              <FaRegUser size={30} />
              <span className="flex p-1">by: </span>
              <p>{article.authorName}</p>
            </div>

            <Image
              src={article.image}
              width={1200}
              height={1500}
              alt="frog"
              priority={true}
              className="rounded-md"
            />

            <div className="pt-4 flex text-gray-600">
              posted on:
              <p className="pl-2">
                {moment(article.date).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            </div>

            <p className="py-5">{article.content}</p>

            <div className="comments mx-auto flex flex-col items-center w-full">
              <h1 className="font-bold text-xl py-3 mb-6">Comments</h1>

              <Comments postId={article._id} />

              <hr className="mt-10" />
            </div>

            <div>
              {comments.map((comment: Comment) => (
                <div key={comment._id} className="border p-4 rounded-lg mb-4">
                  <p className="font-bold">{comment.user}</p>
                  <p className="text-xs text-gray-500 mb-1">
                    {new Date(comment.date).toLocaleString()}
                  </p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
