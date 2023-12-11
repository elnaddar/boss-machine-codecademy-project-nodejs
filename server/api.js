const express = require('express');
const apiRouter = express.Router();

apiRouter.use("/minions", require('./api/minions'));
apiRouter.use("/ideas", require('./api/ideas'));


module.exports = apiRouter;
