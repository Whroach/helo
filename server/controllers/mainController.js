

module.exports = {
    getPost: async (req,res) =>{
        const db = req.app.get('db')

        let results = await db.posts.get_posts()
        .then(res =>{
            res.status(200).send(results)
        })
        
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


};