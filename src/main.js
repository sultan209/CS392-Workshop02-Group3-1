const express = require("express")
const cors = require("cors")
require("dotenv").config()
const foodPrediction = require("./food-prediction")

const app = express()
const port = process.env.PORT || 8000

app.use(cors({
    origin: "*",
    methods: ["GET"]
}))
app.use(express.json())

app.get("/predict", async (req, res) => {
    let ingredient = req.query.ingredient;
    console.log(ingredient)
    foodPrediction(ingredient)
        .then(prediction => {
            console.log(prediction)
            res.status(200)
            res.send({ingredient: ingredient, prediction: prediction})
        })
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})


app.listen(port, () => {
    console.log(`App listen at port: ${port}`)
})
