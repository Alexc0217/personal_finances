const request = require("supertest");
const app = require("../app");

describe('Users API', () => {
  it('GET /api/users --> JSON Users', async () => {
    await request(app).get('/api/users')
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
            Account: expect.any(Object),
            Boxes: expect.any(Array)
          })
        ])
      )
    })
  });

  it('Create a User /api/users', async () => {
    await request(app).post('/api/users')
      .send({fullName: "Alex Moura", email: "Emailteste@outlook.com", password: "AnyPassword@13", cpf: "00000000000"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('Test login /api/users/login', async () => {
    await request(app).post('/api/users/login')
      .send({email: "Emailteste@outlook.com", password: "AnyPassword@13"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
  })

  it('Test find a user /api/user/:id', async () => {
    await request(app).get('/api/user/18')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            fullName: expect.any(String),
            email: expect.any(String),
            password: expect.any(String),
            cpf: expect.any(String),
            Account: expect.any(Object),
          })
        )
      })
  })

  it('test add a value to account', async () => {
    await request(app).post('/api/user/18/add-value')
      .send({value: 900})
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('test remove a value from account', async () => {
    await request(app).post('/api/user/18/remove-value')
      .send({value: 900})
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('Test update a user /api/user/:id', async () => {
    await request(app).put('/api/user/18')
      .send({email: "emailmodificado@outlook.com"})
      .expect('Content-Type', /json/)
      .expect(200)
  })

})
