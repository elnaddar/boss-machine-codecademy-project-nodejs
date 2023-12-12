const express = require('express');
const workRouter = express.Router({mergeParams: true});
const db = require("../db");
const modelType = "work";
module.exports = workRouter;

workRouter.get("/", (req, res, next) => {
    const work = db.getAllFromDatabase(modelType).filter((work)=>{work.minionId == req.minionId});
    res.send(work);
});

workRouter.post("/", (req, res, next) => {
    const instance = db.addToDatabase(modelType, req.body);
    if (instance) {
        res.status(201).send(instance);
    } else {
        res.sendStatus(400);
    }
});

workRouter.param("workId", (req, res, next, id) => {
    const work = db.getFromDatabaseById(modelType, id);
    if(work.minionId != req.minionId){
        res.sendStatus(400);
    } else if (work) {
        req.work = work;
        req.body.id = id;
        req.workId = id;
        next();
    }
    res.sendStatus(404);
});

workRouter.put("/:workId", (req, res, next) => {
    const instance = db.updateInstanceInDatabase(modelType, req.body);
    if (instance) {
        res.send(instance);
    } else {
        res.sendStatus(400);
    }
});

workRouter.delete("/:workId", (req, res, next) => {
    const isDeleted = db.deleteFromDatabasebyId(modelType, req.workId);
    if (isDeleted) {
        res.sendStatus(204);
    } else {
        res.sendStatus(400);
    }
})