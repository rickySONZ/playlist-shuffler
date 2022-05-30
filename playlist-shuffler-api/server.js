import express from "express"
import cors from "cors"
import SpotifyWebApi from "spotify-web-api-node"
import dotenv from "dotenv"

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, err => {
  if (err) console.log(err)
  console.log("listening on port", PORT)
})