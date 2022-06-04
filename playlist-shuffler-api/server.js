const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./config/passport')
const isLoggedIn = require('./middleware/isLoggedIn')

const app = express()

dotenv.config()

app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(cookieSession({
    name: 'spotify-auth-session',
    keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/', isLoggedIn, (req, res) => {
    res.send(`Hello world ${req.user.displayName}`)
})
app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.get('/auth/error', (req, res) => res.send('Unknown Error'))
app.get('api/v1/login', passport.authenticate('spotify'));
app.get('api/v1/login/callback', passport.authenticate('spotify', { failureRedirect: '/auth/error' }),
    function (req, res) {
        res.redirect('/');
    });


const PORT = 3001

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log("listening on port", PORT)
})