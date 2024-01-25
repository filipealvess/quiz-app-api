import request from 'supertest';
import router from '../index.js';

const UNKNOWN_SUBJECT = 'unknown';
const KNOWN_SUBJECT = 'programacao';

describe('GET /subjects', () => {
    it('Get all subjects should return 200', async () => {
        const route = '/subjects';
        const response = await request(router).get(route);

        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    });
});

describe('GET /subjects/:id', () => {
    it('Get unknown subject by id should return 404', async () => {
        const route = `/subjects/${UNKNOWN_SUBJECT}`;
        const response = await request(router).get(route);

        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({});
    });

    it('Get a known subject by id should return 200', async () => {
        const route = `/subjects/${KNOWN_SUBJECT}`;
        const response = await request(router).get(route);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                icon: expect.any(String),
                id: expect.any(String),
                name: expect.any(String),
            }),
        );
        expect(response.headers['content-type']).toMatch(/json/);
    });
});

describe('GET /subjects/:id/questions', () => {
    it('Get unknown subject questions should return 404', async () => {
        const route = `/subjects/${UNKNOWN_SUBJECT}/questions`;
        const response = await request(router).get(route);

        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({});
    });

    it('Get a known subject questions should return 200', async () => {
        const route = `/subjects/${KNOWN_SUBJECT}/questions`;
        const response = await request(router).get(route);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                icon: expect.any(String),
                id: expect.any(String),
                name: expect.any(String),
                questions: expect.any(Array),
            }),
        );
        expect(response.headers['content-type']).toMatch(/json/);
    });
});
