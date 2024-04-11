import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import moment from "moment";

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

export default async function Article({ params }: { params: ArticleParams }) {
  const { id } = params;
  const { article } = await getArticleById(id);

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
            />

            <div className="pt-4 flex text-gray-600">
              posted on:
              <p className="pl-2">
                {moment(article.date).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            </div>

            <p className="py-5">{article.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
