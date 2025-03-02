require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app!"})
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000');
});

