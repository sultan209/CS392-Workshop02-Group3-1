const request = require("supertest")
const app = require("./main")

describe("Food Prediction Endpoint", () => {

    it('should return success if the parameter is valid', async function () {
        const res = await request(app)
            .get("/predict?ingredient=meat")

        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("ingredient")
        expect(res.body).toHaveProperty("prediction")
    });

    it('should return a bad request if the parameter is not valid', async function () {
        const res = await request(app)
            .get("/predict?ingredient=5")
        expect(res.statusCode).toBe(400)
    });

    it('should return a bad request if the parameter is empty', async function () {
        const res = await request(app)
            .get("/predict?ingredient=")
        expect(res.statusCode).toBe(400)
    });

    it('should return a bad request if no parameter is given', async function () {
        const res = await request(app)
            .get("/predict")
        expect(res.statusCode).toBe(400)
    });
})
