const request = require('supertest');
const express = require('express');
const app = express();
const news = require('../../src/controllers/news');
const newsModel = require('../../src/models/news');

// Import the route handlers

describe('POST /create-news', () => {
    it('should update the data in the table and return the affected rows', async () => {
        const mockRequestody = {
            "title": "TEST",
            "content": "TEST Content",
            "match_id": 8,
            "tour_id": 1,
            "sport_id": 2
        }
        const response = await news.createNews(mockRequestody)
        expect(response.affectedRows).toEqual(1);
    });

    it('should throw error when we try to foreign key constraints error occur', async () => {
        const mockRequestody = {
            "title": "TEST",
            "content": "TEST Content",
            "match_id": 13,
            "tour_id": 1,
            "sport_id": 2
        }
        try{
            await news.createNews(mockRequestody)
        }
        catch(err){
            expect(err).toBeDefined()
        }
        
    
    });
});

describe('GET /news/:idType/:id', () => {
    it('should return news data for a valid matchID', async () => {
        const mockResultForMatchId = [
            {
                "id": 1,
                "title": "GT vs RCB",
                "content": "RCB won the mathc by 23 runs",
                "match_id": 1,
                "tour_id": 1,
                "sport_id": 1,
                "status": 1,
                "recUpdatedAt": "2024-02-23T16:25:56.000Z",
                "createdAt": "2024-02-23T16:25:56.000Z"
            }
        ]

        jest.spyOn(newsModel, 'getNewsByMatchId').mockResolvedValue(mockResultForMatchId)
        const response = await news.getNewsByMatchId(1)
        expect(response).toEqual(mockResultForMatchId);
    });

    it('should return news data for a valid tourId', async () => {
        const mockResultForTourId = [
            {
                "id": 2,
                "title": "IND vs WI",
                "content": "Shami took 4 wickets in a row",
                "match_id": 9,
                "tour_id": 2,
                "sport_id": 2,
                "status": 1,
                "recUpdatedAt": "2024-02-23T16:25:56.000Z",
                "createdAt": "2024-02-23T16:25:56.000Z"
            }
        ]
        jest.spyOn(newsModel, 'getNewsByTourId').mockResolvedValue(mockResultForTourId)
        const response = await news.getNewsByTourId(2)
        expect(response).toEqual(mockResultForTourId);
    });

    it('should return news data for a valid sportId', async () => {
        const mockResultForSportId =[
            {
                "id": 2,
                "title": "IND vs WI",
                "content": "Shami took 4 wickets in a row",
                "match_id": 9,
                "tour_id": 2,
                "sport_id": 2,
                "status": 1,
                "recUpdatedAt": "2024-02-23T16:25:56.000Z",
                "createdAt": "2024-02-23T16:25:56.000Z"
            }
        ]

        jest.spyOn(newsModel, 'getNewsBySportId').mockResolvedValue(mockResultForSportId)
        const response = await news.getNewsBySportId(2)
        expect(response).toEqual(mockResultForSportId);
    });
});
