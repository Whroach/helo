require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    { SERVER_PORT, CONNECTION_STRING} = process.env,
    ctrl = require('./controller'),
    app = express(),
    port = SERVER_PORT


app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
});





app.listen(port , () => console.log(`Listening on port ${port}`))