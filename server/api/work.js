const express = require('express');
const workRouter = express.Router({mergeParams: true});
const db = require("../db");
const modelType = "work";
module.exports = workRouter;
