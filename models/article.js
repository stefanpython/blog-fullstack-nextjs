import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  published: { type: Boolean, default: false },
  authorName: { type: String },
});

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
