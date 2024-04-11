"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";

interface Props {
  setImage: (url: string) => void;
  image: string;
}

export default function UploadButtonPage({ setImage, image }: Props) {
  const handleUploadComplete = (res: { url: string }[]) => {
    if (res && res.length > 0) {
      const imageUrl = res[0].url;
      setImage(imageUrl); // Update the imgUrl state in the parent component
    }
  };
  return (
    <main
      className="flex  flex-col items-center justify-start"
      key={Math.random()}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
         @ts-ignore */}
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={handleUploadComplete}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {image.length > 0 && <p>Upload Complete!</p>}
    </main>
  );
}
