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
        next();
    }
    res.sendStatus(404);
});
