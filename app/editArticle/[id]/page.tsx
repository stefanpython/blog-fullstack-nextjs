import React from "react";
import EditArticleForm from "@/components/EditArticleForm";

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

export default async function EditArticle({ params }: any) {
  const { id } = params;

  const { article }: any = await getArticleById(id);
  const { title, content, authorName, image } = article;

  return (
    <>
      <EditArticleForm
        id={id}
        title={title}
        content={content}
        authorName={authorName}
        image={image}
      />
    </>
  );
}
