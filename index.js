const express = require("express")
const app = express()

const PORT = 2020

app.get("/", (req, res) => {
    res.send("<h1>Welcome to DOCKER express API</h1>")
})

app.listen(PORT, () => {
    console.log("Listening in port", PORT)
})