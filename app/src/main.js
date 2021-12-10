const express = require("express")
const foodPrediction = require("./food-prediction")

const app = express()

app.use(express.json())

app.get("/predict", async (req, res) => {
    let {ingredient} = req.body;
    foodPrediction(ingredient)
        .then(prediction => {
            console.log(prediction)
            res.status(200)
            res.send(prediction)
        })
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})


app.listen(8000, () => {
    console.log("App listen at port 8000")
})
