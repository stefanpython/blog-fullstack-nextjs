"use client";

import React, { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CommentProp {
  postId: string;
}

export default function Comments({ postId }: CommentProp) {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user || !content) {
      alert("User name and comment required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, content, postId }),
      });

      if (!res.ok) {
        throw new Error("Failed to create comment");
      } else {
        setUser("");
        setContent("");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          <input
            className="shadow appearance-none border rounded w-[300px] sm:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your name"
            required
            name="user"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </label>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          <textarea
            className="shadow appearance-none border rounded w-[300px] sm:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your comment..."
            required
            name="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
