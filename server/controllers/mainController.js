

module.exports = {
    getPost: async (req,res) =>{
        const db = req.app.get('db')
        


        await db.posts.get_posts() 
        .then(response => res.status(200).send(response))
        .catch(error => console.log(error))
        
    },

    createPost: (req,res) => {

        const { id, title, img, content } = req.body,
                db = req.app.get('db')

         db.posts.create_post({id, title, img, content})
         .then( () => {
             res.sendStatus(200)
         })
         .catch(error=>res.status(500).send(error))  
  
    },

    getUserPosts: async(req,res) => {
        const { id } = req.params
        const db = req.app.get('db')

        await db.posts.user_posts(id)
        .then(response => res.status(200).send(response))
        .catch(error => console.log(error))

    },

    testPost: async(req,res) =>{
        const db = req.app.get('db')
        const { id } = req.params
        const { userposts, search} = req.query
        console.log(req.query)

        if(userposts && search){
            // let result = await db.helo_posts.where('title LIKE $1',[`%${search}%`])
            // let result = await db.posts.user_posts({search})
            let result = await db.query("SELECT p.id, p.title, p.img, p.content, p.author_id, u.username, u.profile_pic FROM helo_posts AS p JOIN helo_users AS u ON p.author_id = u.id WHERE p.title LIKE $1",[`%${search}%`])

            console.log(result)
            if(result[0]){
                res.status(200).send(result)
            }
            else{
                console.log('error 1')
            }

        }
        else if(!userposts && !search ){

            let result = await db.query("SELECT p.id, p.title, p.img, p.content, p.author_id, u.username, u.profile_pic FROM helo_posts AS p JOIN helo_users AS u ON p.author_id = u.id WHERE p.author_id NOT IN ($1)",[`${id}`])
            console.log(result)
            if(result[0]){
                res.status(200).send(result)
            }
            else{
                console.log('error 2')
            }

        }
        else if(!userposts && search){
            let result = await db.query("SELECT p.id, p.title, p.img, p.content, p.author_id, u.username, u.profile_pic FROM helo_posts AS p JOIN helo_users AS u ON p.author_id = u.id WHERE p.author_id NOT IN ($1) AND p.title LIKE $2",[`${id}`, `%${search}%`])
            console.log(result)

            if(result[0]){
                res.status(200).send(result)
            }
            else{
                console.log('error 3')
            }

        }
        else{
            let result = await db.query("SELECT p.id, p.title, p.img, p.content, p.author_id, u.username, u.profile_pic FROM helo_posts AS p JOIN helo_users AS u ON p.author_id = u.id")
            console.log(result)

            if(result[0]){
                res.status(200).send(result)
            }
            else{
                console.log('error 3')
            }
        }

        },

        onePost: async (req,res) =>{
            const { id } = req.params
            parseInt(id)
            const db = req.app.get('db')
    
    
            let result = await db.query("SELECT p.id, p.title, p.img, p.content, p.author_id, u.username, u.profile_pic FROM helo_posts AS p JOIN helo_users AS u ON p.author_id = u.id WHERE p.id = $1", [`${id}`])
    
            if(result[0]){
                res.status(200).send(result)

            }
            else{
                console.log('error in onePost')
            }
        },
        deletePost: async (req, res) => {
            const { id } = req.params
    
            const db = req.app.get('db')
    
            await db.posts.delete_post(id)
            .then(() => res.sendStatus(200))
            .catch(error => console.log(error))
    
        },



};