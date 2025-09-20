const express = require("express");
const { getActionTvShows, getComedyTvShows, getCrimeTvShows, getDramaTvShows, getMysteryTvShows } = require("../Controller/TvController");

const tvRouter = express();

tvRouter.get("/action",getActionTvShows);
tvRouter.get("/comedy",getComedyTvShows);
tvRouter.get("/crime",getCrimeTvShows);
tvRouter.get("/drama",getDramaTvShows);
tvRouter.get("/mystery",getMysteryTvShows);


module.exports=tvRouter;