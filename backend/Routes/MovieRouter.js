const express = require("express");
const { getActionMovies, getComedyMovies, getAnimeMovies, getHorrorMovies, getRomanceMovies } = require("../Controller/MovieController");
const movieRouter = express.Router();


movieRouter.get("/action", getActionMovies);
movieRouter.get("/comedy", getComedyMovies);
movieRouter.get("/horror", getHorrorMovies);
movieRouter.get("/romance", getRomanceMovies);
movieRouter.get("/anime", getAnimeMovies);

    
module.exports=movieRouter;