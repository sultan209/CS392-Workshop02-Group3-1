const express = require("express")

const app = express()

app.use(express.json())

app.get("/predict", (req, res) => {
  let body = req.body;
  console.log(body)
  res.send("Got your message")
})


app.listen(8000, () => {
  console.log("App listen at port 8000")
})
