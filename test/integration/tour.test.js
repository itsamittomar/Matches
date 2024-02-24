const Match = require('../../src/controllers/match');
const matchModel = require('../../src/models/match');
const request = require('supertest');
const { app } = require('../../index');

const mockData = [{
    "id": 1,
    "name": "GT vs RCB",
    "tourId": 1,
    "status": 1,
    "format": "T20",
    "startTime": "2023-04-09T12:30:00.000Z",
    "endTime": "2023-04-09T17:30:00.000Z",
    "recUpdatedAt": "2024-02-23T15:02:36.000Z",
    "createdAt": "2024-02-23T15:02:36.000Z"
}];

describe('Test /matches', () => {
    let server;

    beforeEach(() => {
        jest.spyOn(matchModel, 'getAllMatches').mockResolvedValue(mockData);
    });

    afterEach(() => {
        jest.restoreAllMocks(); 
    });

    beforeAll((done) => {
        server = app.listen(5500, done);
    });

    afterAll((done) => {
        server.close(done);
    });

    it('should return a 200 OK status code and matches data for GET request to /matches', async () => {
        const response = await request(server).get('/matches');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockData);
    });
});
