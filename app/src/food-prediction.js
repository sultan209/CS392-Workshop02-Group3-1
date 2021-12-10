const fasttext = require("fasttext")

const classifier = new fasttext.Classifier()
let trainingDone = false

const config = {
    dim: 100,
    input: "./app/src/train.txt",
    output: "model",
    bucket: 2000000,
    loss: "softmax",
}
const trainClassifier = async () => {
    await classifier.train("supervised", config)
        .then(res => {
            console.log(res)
            trainingDone = true
        })
        .catch(err => {
            console.log(err)
            console.log(config)
        })
}

const foodPrediction = async ingredient => {
    if (!trainingDone)
        await trainClassifier()

    return classifier.predict(ingredient, 3)
        .then(res => res)
        .catch(err => err)
}

console.log(foodPrediction("meat"))

module.exports = foodPrediction
