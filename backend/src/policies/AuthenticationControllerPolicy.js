const Joi = require('joi');


module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })

        const {error} = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Это не email, я не вижу вашу собаку...'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error:` Ваш пароль недостаточно хорош для нашей системы, он должен соответствовать следующим правилам:
                        <br>
                        1. Можно передавать только буквы верхнего регистра, буквы нижнего регистра и цифры.
                        <br>
                        2. Количество символов должно быть не менее 8 и не более 32.
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Некорректная информация предоставлена для регистрации'
                    })
            }
        } else {
            next()
        }
    }
}