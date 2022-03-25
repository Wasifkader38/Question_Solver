
const express = require("express")
const connectDB = require("./config/db")
const { getQuestion, pOSTQuestion } = require("./controllers/QuestionController")
const app = express()
require("dotenv").config()
connectDB()

app.use(express.json({extende:false}))
app.get("/:id", getQuestion)
app.post("/", pOSTQuestion)
app.listen(process.env.PORT, () => {console.log("Listening on port " + process.env.PORT)})