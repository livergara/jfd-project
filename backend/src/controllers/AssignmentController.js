const { Assignment, Resource, Project } = require('../models')

module.exports = {
    async getAssignmentDetails(req, res) {
        try {
            const assignments = await Assignment.findAll({
                where: {
                    ResourceId: req.query.resourceId,
                    ProjectId: req.query.projectId
                },
            });
            const project = await Project.findByPk(req.query.projectId)
            const resource = await Resource.findByPk(req.query.resourceId)
            console.log(assignments, project, resource)
            const assignmentResult = {
                fio: resource.fio,
                    name: project.name,
                    startDate: project.startDate,
                    endDate: project.endDate,
                    manager: project.manager
            }
            res.status(200).send({
                data: assignmentResult
            })
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Возникла ошибка при загрузке проекта'
            })
        }
    },
    async post(req, res) {
        try {
            const assignment = await Assignment.create(req.body)
            res.send(assignment)
        } catch (err) {
            res.status(500).send({
                error: 'Беда'
            })
        }
    },
}