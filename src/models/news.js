const mysql = require('../lib/mysql');

const createNews = async (params) => {
    const{title, content, match_id, tour_id, sport_id} = params
    const statement = 'INSERT INTO news (title, content, match_id, tour_id, sport_id) VALUES (?, ?, ?, ?, ?)';
    const parameters = [title, content, match_id, tour_id, sport_id];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async(params) =>{
    let statement = `SELECT * FROM news WHERE match_id=?`;
    const parameters = [params]
    return await mysql.query(statement, parameters)
}

const getNewsByTourId = async(params) =>{
    let statement = `SELECT * FROM news WHERE tour_id=?`;
    const parameters = [params]
    return await mysql.query(statement, parameters)
}

const getNewsBySportId = async(params) =>{
    let statement = `SELECT * FROM news WHERE tour_id=?`;
    const parameters = [params]
    return await mysql.query(statement, parameters)
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId:getNewsByMatchId,
    getNewsByTourId:getNewsByTourId,
    getNewsBySportId:getNewsBySportId
    
}