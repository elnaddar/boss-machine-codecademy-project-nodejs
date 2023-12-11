const checkMillionDollarIdea = (req, res, next) => {
    const idea = req.body;
    if(idea.numWeeks * idea.weeklyRevenue >= 1e6){
        next();
    }else{
        res.sendStatus(400);
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
