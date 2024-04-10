"use client";

import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import UploadButtonPage from "../upload-button/page";

export default function AddArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content || !authorName) {
      alert("Title, content and author name required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/articles/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, authorName, image }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create article");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 w-80 sm:w-[450px]">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title:
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            required
            placeholder="Article title"
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
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="content"
            required
            placeholder="Article description"
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
            onChange={(e) => setAuthorName(e.target.value)}
            value={authorName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="authorName"
            placeholder="Author name"
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
      </div>
       */}

      <UploadButtonPage setImage={setImage} />

      <div className="mb-4 flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>

        <Link href="/">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}
