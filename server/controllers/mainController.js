module.exports = {
    getUsers: (req,res) => {
        const db = req.app.get('db')

        db.all_users()
        .then(res => res.status(200).send(res.data))
        .catch(error => console.log(error))
    }

};