const userDb = require('../schemas/userSchema')

const getAll = async () => {
    return userDb.find()
}

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await getAll()
        res.send({users})
    },

    createUser: async (req, res) => {

        const {name, age, email, password} = req.body
        let item = new userDb

        item.name = name
        item.age = age
        item.email = email
        item.password = password

        await item.save()

        const users = await getAll()

        res.send({error: false, msg: 'Vartotojas sėkmingai sukurtas!', users})
    },

    deleteUser: async (req, res) => {
        const {id} = req.params
        console.log(id)
        await userDb.findOneAndDelete({_id: id})
        const users = await getAll()
        res.send({users})
    },
}