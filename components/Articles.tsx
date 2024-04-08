import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

interface Article {
  _id: string;
  title: string;
  content: string;
  date: string;
  authorName: string;
  image: string;
}

const getArticles = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/articles", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading topics articles", error);
  }
};

export default async function Articles() {
  const { articles } = await getArticles();

  return (
    <div className="flex flex-col items-center py-4 ">
      <h1 className="text-2xl font-medium">Popular stories</h1>

      <div className="flex flex-wrap gap-10">
        {articles.map((item: Article) => (
          <div key={item._id} className="flex  py-10 max-w-[30em]">
            <div className="flex flex-col px-1">
              <Link href={`/article/${item._id}`}>
                {/* CHANGE DYNAMIC IP HERE */}
                <Image
                  src={`/${item.image}`}
                  width={500}
                  height={500}
                  alt="frog"
                  priority={true}
                />
                <h1 className="text-2xl py-2 hover:underline">{item.title}</h1>
              </Link>
              <p>{item.date}</p>

              <p className="py-5">{item.content}</p>

              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaRegUser size={20} />
                  <span className="flex p-1">by: </span>
                  <p>{item.authorName}</p>
                </div>

                {/* CHANGE DYNAMIC IP HERE */}
                <Link href={`/editArticle/${item._id}`}>
                  <button className="btn border px-4 py-1 bg-green-400 text-white font-bold rounded-sm">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
