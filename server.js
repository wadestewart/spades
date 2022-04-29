// setting up the express server
const express = require('express');
// const cors = require('cors');
const APP_PORT = process.env.PORT || 3000;
// create the app
const app = express();
// app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// listen for changes on app's port
app.listen(APP_PORT, function() {
    console.log(`✅ PORT: ${APP_PORT} 🌟`);
});
