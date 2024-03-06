import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/connection.js";
import LikeRouter from "./routes/like.route.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 8003;

app.use("/", LikeRouter);

app.listen(PORT, async () => {
  console.log("Like Server connected on port", PORT);
  await connectDb();
});
