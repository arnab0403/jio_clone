const express = require("express");
const dotenv=require("dotenv");
const authRouter = require("./Routes/AuthRouter");
const movieRouter = require("./Routes/MovieRouter");
const mongoose = require("mongoose");
const cors = require("cors");
const discoverRouter = require("./Routes/DiscoverRoute");
const userRouter = require("./Routes/UserRoute");
const tvRouter = require("./Routes/TvRouter");

const app = express();
dotenv.config();

const dbLink = `mongodb+srv://${process.env.db_user}:${process.env.password}@bookres.uiel5v2.mongodb.net/?retryWrites=true&w=majority&appName=BookRes`
const {SERVER_PORT}=process.env;

mongoose.connect(dbLink)
.then(function(){
    console.log("DB Connected");
});

app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true                // 👈 allow cookies
}));



// routes
app.use("/api/auth/",authRouter);
app.use("/api/user/",userRouter);
app.use("/api/discover/",discoverRouter);
app.use("/api/tv/",tvRouter);
app.use("/api/movie/",movieRouter);


app.listen(SERVER_PORT,function(){
    console.log("Server Started At PORT NO: ",SERVER_PORT);
});