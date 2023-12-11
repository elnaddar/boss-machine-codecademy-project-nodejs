const express = require('express');
const apiRouter = express.Router();

apiRouter.use("/minions", require('./api/minions'))


module.exports = apiRouter;
