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

        await userDb.findOneAndDelete({_id: id})

        const users = await getAll()
        res.send({users})
    },

    updateUser: async (req, res) => {
        const {name, age, email, password, id} = req.body

        await userDb.findOneAndUpdate(
            {_id: id},
            {$set: {name: name, age: age, email: email, password: password}})

        const users = await getAll()
        res.send({error: false, msg: 'Vartotojas sėkmingai atnaujintas!', users})
    }
}