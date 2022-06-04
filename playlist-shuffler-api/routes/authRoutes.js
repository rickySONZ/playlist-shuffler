const express = require('express');
const fetch = import('node-fetch');
const router = express.Router();
const path = require('path')

// app.get('/auth/error', (req, res) => res.send('Unknown Error'))
// app.get('/auth/spotify',passport.authenticate('spotify'));
// app.get('/auth/spotify/callback',passport.authenticate('spotify', { failureRedirect: '/auth/error' }),
// function(req, res) {
//   res.redirect('/');
// });

// const encodeFormData = (data) => {
//     return Object.keys(data)
//       .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//       .join('&');
//   }
  

// router.get('/login', async (req, res) => {
//     const scope =
//         `user-modify-playback-state
//       user-read-playback-state
//       user-read-currently-playing
//       user-library-modify
//       user-library-read
//       user-top-read
//       playlist-read-private
//       playlist-modify-public`;

//     res.redirect('https://accounts.spotify.com/authorize?' +
//         URLSearchParams.stringify({
//             response_type: 'code',
//             client_id: process.env.CLIENT_ID,
//             scope: scope,
//             redirect_uri: process.env.REDIRECTURI
//         })
//     );
// });

// router.get('/authenticate', async (req, res) => {
//     const body = {
//       grant_type: 'authorization_code',
//       code: req.query.code,
//       redirect_uri: process.env.REDIRECTURI,
//       client_id: process.env.CLIENT_ID,
//       client_secret: process.env.CLIENT_SECRET,
//     }
  
//     await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Accept": "application/json"
//       },
//       body: encodeFormData(body)
//     })
//     .then(response => response.json())
//     .then(data => {
//       const query = querystring.stringify(data);
//       res.redirect(`${process.env.CLIENT_REDIRECTURI}?${query}`);
//     });
//   });
 
  module.exports = router