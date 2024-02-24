const Tour = require('../controllers/tour');
const NodeCache = require("node-cache");
const cache = new NodeCache(); 

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            let params = req.query;
            let cachedResult = cache.get(params.query);
            if (cachedResult) {
                console.log("Cache hit for tour:", params.query);
                return res.json(cachedResult);
            }

            let result = await Tour.getMatchesByTourName(params);
            console.log("Cache miss for tour:", params.query);
            cache.set(params.query, result, 3600);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}