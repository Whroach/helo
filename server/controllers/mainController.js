

module.exports = {
    getPost: (req,res) =>{
        const db = req.app.get('db')

        db.posts.get_posts() 
        .then(posts => res.status(200).send(posts))
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

    getUserPosts: (req,res) => {
        const { id } = req.params
        const db = req.app.get('db')

        db.posts.user_posts(id)
        .then(posts => res.status(200).send(posts))
        .catch(error => console.log(error))

    },

    searchPost: (req,res) => {
        // const{ search } = req.body,
        const db = req.app.get('db')

            // console.log(search)
        
        db.posts.search_posts()
        .then(result => res.status(200).send(result))
        .catch(error => console.log(error))

        

    }


};