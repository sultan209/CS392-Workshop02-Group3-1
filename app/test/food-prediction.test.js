const foodPrediction = require("../src/food-prediction")

describe("Food Prediction Functionality", () => {
    it('should return empty list when no answer found', function () {
        foodPrediction("ksjfnvsfjknv")
            .then(prediction => {
                expect(prediction).toEqual([])
            })
    });

    it('should return valid list when valid answer given', function () {
        foodPrediction("meat")
            .then(prediction => {
                expect(prediction.length).toBe(3)
            })

    });
})
