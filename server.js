// setting up the express server
const express = require('express');
// const cors = require('cors');
const APP_PORT = process.env.PORT || 3000;
// create the app
const app = express();
// app.use(cors());

// This displays message that the server running and listening to specified port
app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11
