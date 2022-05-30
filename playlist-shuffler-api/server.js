import express from "express"
import cors from "cors"
import SpotifyWebApi from "spotify-web-api-node"
import dotenv from "dotenv"

const app = express()
dotenv.config()

const router = express.Router();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3001

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.get('/login', async (req, res) => {
    const scope =
        `user-modify-playback-state
      user-read-playback-state
      user-read-currently-playing
      user-library-modify
      user-library-read
      user-top-read
      playlist-read-private
      playlist-modify-public`;

    res.redirect('https://accounts.spotify.com/authorize?' +
        URLSearchParams.stringify({
            response_type: 'code',
            client_id: process.env.CLIENT_ID,
            scope: scope,
            redirect_uri: process.env.REDIRECTURI
        })
    );
});

router.get('/authenticate', async (req, res) => {
    const body = {
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: process.env.REDIRECTURI,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    }
  
    await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      body: encodeFormData(body)
    })
    .then(response => response.json())
    .then(data => {
      const query = querystring.stringify(data);
      res.redirect(`${process.env.CLIENT_REDIRECTURI}?${query}`);
    });
  });

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log("listening on port", PORT)
})