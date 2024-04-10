import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const file = req.files.file; // assuming the file is sent in the request body
    const filePath = path.join(process.cwd(), "public", "uploads", file.name);

    // Save the file to the server
    fs.writeFile(filePath, file.data, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to upload image" });
      } else {
        const imageUrl = `/uploads/${file.name}`;
        res.status(200).json({ imageUrl });
      }
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
