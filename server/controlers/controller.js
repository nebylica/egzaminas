const userDb = require('../schemas/userSchema')

module.exports = {
    createUser: async (req, res) => {

        const {name, age, email, password} = req.body
        let item = new userDb

        item.name = name
        item.age = age
        item.email = email
        item.password = password

        await item.save()

        res.send({error: false, msg: 'Vartotojas sėkmingai sukurtas!'})
    },
}