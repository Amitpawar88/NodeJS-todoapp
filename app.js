import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

// Using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // allows our session cookie to be sent back and forth from server to client
}))

// Using routes
app.use("/api/v1/users", userRouter); // all routes in userRouter will be prefixed with /users
app.use("/api/v1/task", taskRouter);


app.get("/", (req, res) => {
  res.send("India");
});

// MVC defination: https://www.youtube.com/watch?v=DUg2SWWK18I (Model View Controller)


app.use(errorMiddleware);