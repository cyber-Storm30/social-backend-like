import PostModel from "../models/post.model.js";
import axios from "axios";
import { BASE_URL } from "../config/connection.js";

class LikeService {
  async likePost(userId, postId) {
    try {
      const post = await PostModel.findById(postId);
      if (!post) {
        throw new Error("Post is not available");
      }
      if (!post.likes.includes(userId)) {
        await post.updateOne({ $push: { likes: userId } });
        return {
          success: true,
          data: "LIKED",
        };
      } else {
        await post.updateOne({ $pull: { likes: userId } });
        return {
          success: true,
          data: "DISLIKED",
        };
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new LikeService();
