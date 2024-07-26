import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import myUserRoute from "./routes/MyUserRoutes";

import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("connected");
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health ok" });
});

app.use("/api/my/user", myUserRoute);

app.listen(3000, () => {
  console.log("server started on port 3000 ");
});
