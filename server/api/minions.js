const express = require('express');
const minionsRouter = express.Router();
const db = require("../db");
const modelType = "minions";
module.exports = minionsRouter;

minionsRouter.param("minionId", (req, res, next, id)=>{
    id = Number(id);
    const minion = db.getFromDatabaseById(modelType, id);
    if(minion){
        req.minion = minion;
        req.minionId = id;
        next();
    }
    res.sendStatus(404);
});

minionsRouter.get("/", (req, res, next)=>{
    res.send(db.getAllFromDatabase(modelType));
});

minionsRouter.post("/", (req, res, next)=>{
    const instance = db.addToDatabase(modelType, req.body);
    if(instance){
        res.status(201).send(instance);
    } else{
        res.sendStatus(404);
    }
});

minionsRouter.get("/:minionId", (req, res, next)=>{
    res.send(req.minion);
});

minionsRouter.put("/:minionId", (req, res, next)=>{
    const instance = db.updateInstanceInDatabase(modelType, req.minion);
    if(instance){
        res.send(instance);
    }else{
        res.sendStatus(400);
    }
});