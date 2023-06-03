const request = require("supertest");
const app = require("../../app");

describe('test my app server', () => {
  it('should get main route', async () => {
    const res = await request(app).get('/').expect(200)
    
    expect(res.body).toHaveProperty("message")
  })
})