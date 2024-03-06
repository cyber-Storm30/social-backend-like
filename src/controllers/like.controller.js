import LikeService from "../services/like.service.js";

class LikeController {
  async likePost(req, res) {
    try {
      const { userId, postId } = req.body;
      const likeStatus = await LikeService.likePost(userId, postId);
      return res.status(200).json(likeStatus);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new LikeController();
