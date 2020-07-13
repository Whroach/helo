const bcrypt = require('bcryptjs')

module.exports = {

    register: async(req, res) => {
        //data we need to check if existing user is already on file and run a function to register a new user
    const {username, password, profilePic} = req.body,
          db = req.app.get('db');

    /*if a user with this email already exists in our database, then we need to kill the function and send back an alert
        otherwise no email exists, user can now register an account with us */
    const foundUser = await db.users.get_user({username});
    if(foundUser[0]){
        return res.status(400).send('Username is already taken')
    }

    //.genSaltSync() and hashSync() to protect users password 

    let salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(password, salt);

  
    const newUser = await db.users.register_user({username, password: hash, profilePic});
    req.session.user = newUser[0];
    res.status(201).send(req.session.user);
    },

    login: async(req, res) =>{
        const { username, password } = req.body,
            db = req.app.get('db')


        const foundUser = await db.users.get_user({username})
        console.log(username)
    

        console.log(foundUser)

        if(!foundUser[0]){
            return res.status(400).send('User cannot be found')
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].password)
        if(!authenticated){
            return res.status(401).send('Password is incorrect')
        }

        delete foundUser[0].password
        req.session.user = foundUser[0]
        res.status(202).send(req.session.user)


    },
    logout: (req, res) => {
        //logout clears out the session of user data
        req.session.destroy();
        res.sendStatus(200);
    }

};
