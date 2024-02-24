const News = require('../models/news');

const createNews = async params => {


    return await News.createNews(params);
}

const getNewsByMatchId = async params =>{
    const result= await News.getNewsByMatchId(params)
    console.log(result)
    return result
}

const getNewsByTourId = async params =>{
    const result= await News.getNewsByTourId(params)
    console.log(result)
    return result
}

const getNewsBySportId = async params =>{
    const result= await News.getNewsBySportId(params)
    console.log(result , "sportId")
    return result
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId:getNewsByMatchId,
    getNewsByTourId:getNewsByTourId,
    getNewsBySportId:getNewsBySportId
}