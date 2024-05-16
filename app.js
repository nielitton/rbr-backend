const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const conn = require("./db/conn")

conn()

const routes = require("./routes/router")
const { route } = require("moongose/routes")

app.use("/api", routes)

app.use(express.json())

app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000")
})