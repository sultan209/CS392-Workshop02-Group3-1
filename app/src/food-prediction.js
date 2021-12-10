const fasttext = require("fasttext")

const classifier = new fasttext.Classifier()
let trainingDone = false

const config = {
    dim: 100,
    input: "../../train.txt",
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
}


const foodPrediction = async ingredient => {
    if (!trainingDone)
        await trainClassifier()

    return classifier.predict(ingredient, 3)
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.error(err)
            return []
        })
}

console.log(foodPrediction("milk"))

module.exports = foodPrediction
