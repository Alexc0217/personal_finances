const request = require("supertest");
const app = require("../../app");

describe('Users API', () => {
  it('GET /api/users --> JSON Users', async () => {
    const res = await request(app).get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            fullName: expect.any(String),
            email: expect.any(String),
            password: expect.any(String),
            cpf: expect.any(String),
            Account: expect.any(Object)
          })
        ])
      )
    })
  });
})
