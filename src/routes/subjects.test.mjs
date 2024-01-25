import request from 'supertest';
import router from '../index.js';

describe('GET /subjects', () => {
    it('Get all subjects should return 200', async () => {
        const route = '/subjects';
        const response = await request(router).get(route);

        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    });
});
