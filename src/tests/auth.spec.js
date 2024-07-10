const request = require('supertest');
const app = require('../src/app');
const db = require('../src/models');

describe('Auth Endpoints', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  it('should register a user successfully with default organisation', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        phone: '1234567890',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data.user.firstName).toBe('John');
  });

  // Add more tests for login, validation errors, etc.
});
