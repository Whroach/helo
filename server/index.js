require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    mainCtrl = require('./controllers/mainController'),
    authCtrl = require('./controllers/loginController'),
    app = express(),
    port = SERVER_PORT


app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 365}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
    // console.log('db connected')
});

//AUTH ENDPOINTS

// app.get('/api/users', mainCtrl.getUsers)
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)

//POST ENDPOINTS
app.get('/api/get-posts',mainCtrl.getPost)
app.post('/api/create-post', mainCtrl.createPost)









app.listen(port , () => console.log(`Listening on port ${port}`))