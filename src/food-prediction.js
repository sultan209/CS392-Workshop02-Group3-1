const fasttext = require("fasttext")

const classifier = new fasttext.Classifier()
let trainingDone = false

const config = {
    dim: 100,
    input: "train.txt",
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
    if (isNaN(ingredient))
        throw new TypeError("Number is invalid parameter")

    return classifier.predict(ingredient, 3)
        .then(res => res)
        .catch(err => err)
}

module.exports = foodPrediction
