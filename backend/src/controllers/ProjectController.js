const { Project } = require('../models')
// const { Resource } = require('../models')
// const { Assignment } = require('../models')


module.exports = {
    async index(req, res) {
        try {
            const projects = await Project.findAll({
                where: {},
                // include: {
                //     model: Assignment,
                //     include: [Resource]
                // }
            })
            res.send(projects)
        } catch (err) {
            res.status(500).send({
                error: 'Возникла ошибка при загрузке списка проектов'
            })
        }
    },
    async show(req, res) {
        try {
            const project = await Project.findByPk(req.params.projectId)
            res.send(project)
        } catch (err) {
            res.status(500).send({
                error: 'Возникла ошибка при загрузке проекта'
            })
        }
    },
    async post(req, res) {
        try {
            const project = await Project.create(req.body)
            res.send(project)
        } catch (err) {
            res.status(500).send({
                error: 'Возникла ошибка при создании проекта'
            })
        }
    },
    async put(req, res) {
        try {
            const project = await Project.update(req.body, {
               where: {
                id: req.params.projectId
               }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Возникла ошибка при обновлении данных'
            })
        }
    }
}