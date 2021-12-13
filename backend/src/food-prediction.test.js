const foodPrediction = require("./food-prediction")

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

    it('should return an exception if the parameter is not string', function () {
        expect(() => {
            foodPrediction(35)
                .catch(err => err)
        }).toThrow(TypeError)
    });

    it('should return an excepttion if the parameter is empty', function () {
        expect(() => {
            foodPrediction("")
                .catch(err => err)
        }).toThrow(TypeError)
    });

})
