import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test frist endPoint', () => {
  it('Get the /', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
