const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(cookieSession({
    name: 'spotify-auth-session',
    keys: ['key1', 'key2']
}))

app.get('/', isLoggedIn, (req, res) => {
    res.send(`Server is running....`)
})

const PORT = 3001

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log("listening on port", PORT)
})