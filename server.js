const express = require("express");
const app = express();
port = 3000;

const db = require("./config/database");
const { router } = require("./routers/user.router");
const { postRouter } = require("./routers/post.router");
const passport = require("passport");
const localAuth = require("./middlewares/passport");
const session = require("express-session");

// const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(session({ secret: "1234", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
localAuth(passport);

app.use(router);
app.use(postRouter);

app.listen(port, (err) => {
  db();
  if (!err) console.log("Server is running on http://localhost:" + port);
});
