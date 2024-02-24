const News = require('../controllers/news');
const match = require('../models/match');
const NodeCache = require("node-cache");
const cache = new NodeCache(); 

module.exports = function(app) {
    app.route('/create-news').post(async (req, res, next) => {
        try {
            const result = await News.createNews(req.body)
            if(result.affectedRows){
                return res.json("Data Insertion Completed!!");
            }else{
                return res.status(400).json("Error Occured while insertion")
            }
            
        } catch (err) {
            return next(err);
        }
    });


    app.route('/news/:idType/:id').get(async (req, res, next) => {
        try {
            const { idType, id } = req.params;
            let result;
    
            switch (idType) {
                case 'matchId':
                    result = await News.getNewsByMatchId(id);
                    break;
                case 'tourId':
                    result = await News.getNewsByTourId(id);
                    break;
                case 'sportId':
                    result = await News.getNewsBySportId(id);
                    break;
                default:
                    return res.status(400).json("Invalid idType");
            }
    
            if (result) {
                return res.json(result);
            } else {
                return res.status(400).json("Error Occurred while fetching news");
            }
        } catch (err) {
            return next(err);
        }
    });
    
}