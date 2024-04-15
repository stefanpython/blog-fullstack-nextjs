"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import UploadButtonPage from "@/app/upload-button/page";
import { useRouter } from "next/navigation";

interface EditArticleProps {
  id: string;
  title: string;
  content: string;
  authorName: string;
  image: string;
}

export default function EditArticleForm({
  id,
  title,
  content,
  authorName,
  image,
}: EditArticleProps) {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newAuthorName, setNewAuthorName] = useState(authorName);
  const [newImage, setNewImage] = useState(image);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newContent, newAuthorName, newImage }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to edit article");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="mx-auto mt-8 w-80 sm:w-[450px]">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title:
            <input
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="title"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content:
            <textarea
              onChange={(e) => setNewContent(e.target.value)}
              value={newContent}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="content"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="authorName"
          >
            Author Name:
            <input
              onChange={(e) => setNewAuthorName(e.target.value)}
              value={newAuthorName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="authorName"
            />
          </label>
        </div>

        {/* 
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              name="image"
            />
          </label>
        </div> */}

        <UploadButtonPage setImage={setNewImage} image={newImage} />

        <div className="mb-4 flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>

          <Link href="/">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
