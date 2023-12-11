const express = require('express');
const ideasRouter = express.Router();
const db = require("../db");
const modelType = "ideas";
module.exports = ideasRouter;

ideasRouter.param("ideaId", (req, res, next, id) => {
    const idea = db.getFromDatabaseById(modelType, id);
    if (idea) {
        req.idea = idea;
        req.body.id = id;
        req.ideaId = id;
        next();
    }
    res.sendStatus(404);
});

ideasRouter.get("/", (req, res, next) => {
    res.send(db.getAllFromDatabase(modelType));
});

ideasRouter.post("/", (req, res, next) => {
    const instance = db.addToDatabase(modelType, req.body);
    if (instance) {
        res.status(201).send(instance);
    } else {
        res.sendStatus(400);
    }
});

ideasRouter.get("/:ideaId", (req, res, next) => {
    res.send(req.idea);
});

ideasRouter.put("/:ideaId", (req, res, next) => {
    const instance = db.updateInstanceInDatabase(modelType, req.body);
    if (instance) {
        res.send(instance);
    } else {
        res.sendStatus(400);
    }
});

ideasRouter.delete("/:ideaId", (req, res, next) => {
    const isDeleted = db.deleteFromDatabasebyId(modelType, req.ideaId);
    if (isDeleted) {
        res.sendStatus(204);
    } else {
        res.sendStatus(400);
    }
})