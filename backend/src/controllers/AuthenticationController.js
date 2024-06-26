const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'Пользователь с такой почтой уже зарегистрирован в системе.'
            })
            //email уже существует (пример)
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'Вы у нас не работаете.'
                })
            }

            const isPasswordValid = await user.comparePassword(password) 
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Пароль некорректен.'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })

        } catch (err) {
            res.status(500).send({
                error: 'Возникла ошибка при входе. К счастью, причина ошибки - не вы.'
            })
        }
    }
}