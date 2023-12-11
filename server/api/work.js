const express = require('express');
const workRouter = express.Router({mergeParams: true});
const db = require("../db");
const modelType = "work";
module.exports = workRouter;

workRouter.get("/", (req, res, next) => {
    const work = db.getAllFromDatabase(modelType).filter((work)=>{work.minionId == req.minionId});
    res.send(work);
});