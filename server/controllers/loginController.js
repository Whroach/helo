const bcrypt = require('bcryptjs')

module.exports = {

    register: async(req,res) => {

        //data we need to check if existing user is already on file and run a function to register a new user
        const { username, password } =  req.body
        const db = req.app.get('db')
            
        const result =  await db.users.get_user({username})
        const userOnFile = result[0] 

        console.log(result)

        /*if a user with this email already exists in our database, then we need to kill the function and send back an alert
        otherwise no email exists, user can now register an account with us */
        if(userOnFile){
            return res.status(400).send('Username is already taken')
        }

        //.genSaltSync() and hashSync() to protect users password 

        let salt = await bcrypt.genSaltSync(10)
        let hash = await bcrypt.hashSync(password, salt)

        const registerUser = await db.users.register_user({username, password: hash})
        req.session.user = registerUser[0]

        res.status(201).send(req.session.user)


    },

    login: async(req, res) =>{
        const { username, password } = req.body
        const db = req.app.get('db')


        const existingUser = await db.users.get_user({username})
        const result = existingUser[0]

        console.log(existingUser)

        if(!result){
            return res.status(400).send('User cannot be found')
        }

        const authenticated = await bcrypt.compareSync(password, existingUser[0].password)
        if(!authenticated){
            return res.status(401).send('Password is incorrect')
        }

        delete existingUser[0].password
        req.session.user = existingUser[0]
        res.status(202).send(req.session.user)


    },

};