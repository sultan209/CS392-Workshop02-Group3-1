const fastText = require("fasttext")
const path = require("path")

const model = path.resolve(__dirname, '../model.bin');

// In case if I want to train the model
// const input = path.resolve(__dirname, "./train.txt")
// const trainClassifier = () => {
//     const classifier = new fastText.Classifier()
//     const config = {
//         dim: 100,
//         input: input,
//         output: "model",
//         bucket: 2000000,
//         loss: "softmax",
//     }
//     return classifier.train("supervised", config)
// }

const classifier = new fastText.Classifier(model)


const foodPrediction = ingredient => {
    if (typeof ingredient !== "string")
        throw new TypeError("Only string is valid")
    if (ingredient === "")
        throw new TypeError("Ingredient cannot be empty")
    return classifier.predict(ingredient, 3)
}


module.exports = foodPrediction
