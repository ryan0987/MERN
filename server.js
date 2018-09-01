const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Mongo DB 연결
mongoose
  .connect(db)
  .then(() => console.log("MongoDB 연결됨"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world!"));

// 라우트 설정
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port : " + port));
