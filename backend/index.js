const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3000

const user = "user@gmail.com"
const pass = "password123"

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
  res.json({ status: "ok", message: "Netiflex login API is running" })
})

app.get("/login", function (req, res) {
  const { username, password } = req.query

  if (username === user && password === pass) {
    res.json(true)
  } else {
    res.json(false)
  }
})

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`)
})