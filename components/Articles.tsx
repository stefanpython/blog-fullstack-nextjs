import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import { HiPencilAlt } from "react-icons/hi";
import RemoveButton from "./RemoveButton";

interface Article {
  _id: string;
  title: string;
  content: string;
  date: string;
  authorName: string;
  image: string;
}

const getUser = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/user", {
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
  const { admin } = await getUser();

  console.log(admin[0].email);
  return (
    <div className="flex flex-col items-center py-4 ">
      <h1 className="text-2xl font-medium">Popular stories</h1>

      <div className="flex flex-wrap gap-10 justify-center">
        {articles.map((item: Article) => (
          <div key={item._id} className="flex  py-10 max-w-[30em]">
            <div className="flex flex-col px-1">
              <Link href={`/article/${item._id}`}>
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt="frog"
                  priority={true}
                  className="max-h-[20em] rounded-md"
                />
                <h1 className="text-2xl py-2 hover:underline">{item.title}</h1>
              </Link>

              <p className="text-gray-600">
                {moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}
              </p>

              <p className="py-5">{item.content}</p>

              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaRegUser size={20} />
                  <span className="flex p-1">by: </span>
                  <p>{item.authorName}</p>
                </div>

                <div className="flex items-center">
                  <Link
                    href={`/editArticle/${item._id}`}
                    className="hover:bg-gray-200"
                  >
                    <HiPencilAlt size={40} />
                  </Link>

                  <br />
                  <br />

                  <RemoveButton id={item._id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
