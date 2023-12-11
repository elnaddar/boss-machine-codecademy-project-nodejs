const express = require('express');
const meetingsRouter = express.Router();
const db = require("../db");
const modelType = "meetings";
module.exports = meetingsRouter;

meetingsRouter.get("/", (req, res, next) => {
    res.send(db.getAllFromDatabase(modelType));
});

meetingsRouter.post("/", (req, res, next) => {
    console.log("POST: " +JSON.stringify(req.body));
    const instance = db.addToDatabase(modelType, req.body);
    if (instance) {
        res.status(201).send(instance);
    } else {
        res.sendStatus(400);
    }
});

meetingsRouter.delete("/", (req, res, next) => {
    const isDeleted = db.deleteAllFromDatabase(modelType);
    if (isDeleted != null) {
        res.sendStatus(204);
    } else {
        res.sendStatus(400);
    }
});
