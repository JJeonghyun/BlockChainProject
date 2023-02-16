import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import db from "./models/index.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8083);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "project",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error(error);
  });

app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log("Project Server Open");
});
