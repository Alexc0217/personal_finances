const request = require("supertest");
const app = require("../app");

describe('Box API', () => {
  it("Create a BOX", async () => {
    await request(app).post('/api/box')
      .send({boxName: "Meu sonho", value: 0})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it("My boxes", async () => {
    await request(app).get('/api/boxes/mine/18')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              boxName: expect.any(String),
              value: expect.any(BigInt),
              userId: expect.any(Number)
            })
          ])
        )
      })
  })

  it("update a box value", async () => {
    await request(app).put('/api/box/1')
      .send({value: 350})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
  })

})
