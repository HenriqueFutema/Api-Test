const User = require('../model/User')

class UserController {
    async index(req, res) {
        const users = await User.find()
        return res.json(users)
    }

    async show(req, res) {
        const user = await User.findById(req.params.id)
        return res.json(user)
    }

    async delete(req, res) {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.json(user)
    }

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.json(user)
    }

    async store(req, res) {
        const { email } = req.body
        if (await User.findOne({ email })) {
            return res.status(400).json("Email em uso")
        }

        const user = await User.create(req.body)

        return res.json(user)
    }
}

module.exports = new UserController()