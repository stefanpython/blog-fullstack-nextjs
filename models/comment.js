import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  content: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  user: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
