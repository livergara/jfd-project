const { Resource } = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const resources = await Resource.findAll({
                limit: 10
            })
            res.send(resources)
        } catch (err) {
            res.status(500).send({
                error: 'Возникла ошибка при загрузке ресусров'
            })
        }
    },
    async show (req, res) {
        try {
          const resource = await Resource.findByPk(req.params.resourceId)
          res.send(resource)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the songs'
          })
        }
      },
    async post (req, res) {
        try {
            const resource = await Resource.create(req.body)
            res.send(resource)
        } catch (err) {
            res.status(500).send({
                error: 'Возникла ошибка при создании ресурса'
            })
        }
    }
}