const {User} = require('../models')
const config = require('../config/config')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Пользователь с такой почтой уже зарегистрирован в системе.'
            })
            //email уже существует (пример)
        }
    }
}