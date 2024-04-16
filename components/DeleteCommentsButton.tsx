"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface DeleteCommentsProp {
  id: string;
}

export default function RemoveButton({ id }: DeleteCommentsProp) {
  const router = useRouter();

  const removeArticle = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/comments?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeArticle}>
      <HiOutlineTrash size={40} className="text-red-400 hover:bg-gray-200" />
    </button>
  );
}
