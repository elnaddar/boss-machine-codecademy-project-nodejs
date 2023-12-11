const express = require('express');
const apiRouter = express.Router();

apiRouter.use("/minions", require('./api/minions'));
apiRouter.use("/ideas", require('./api/ideas'));
apiRouter.use("/meetings", require('./api/meetings'));


module.exports = apiRouter;
