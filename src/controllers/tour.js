const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {

    console.log(params,"bjhjhbjbjhbj")
    const { query } = params;

    if (!query) {
        throw new Error('Missing required parameter: name');
    }

    return await Tour.getMatchesByTourName(query);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}