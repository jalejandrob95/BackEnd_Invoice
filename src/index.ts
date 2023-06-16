import "dotenv/config";
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

//local modules
import * as db from "./db";
import routersApi from "./routes";

const app = express();

//db connection
db.connect();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

const port = process.env.PORT || 3003;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./assets")));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//Routes
routersApi(app); // Function to generate routers /v1 app to use in all routes

//Custom error handler middleware
//app.use(handleError);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
