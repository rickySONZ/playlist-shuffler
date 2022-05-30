import express from "express"
import cors from "cors"
import SpotifyWebApi from "spotify-web-api-node"
import dotenv from "dotenv"

const app = express()
const AuthRoutes = require('./routes/authRoutes')
dotenv.config()

app.use(cors(), AuthRoutes, express.json(), express.urlencoded({ extended: true }))

const PORT = 3001


app.listen(PORT, err => {
    if (err) console.log(err)
    console.log("listening on port", PORT)
})