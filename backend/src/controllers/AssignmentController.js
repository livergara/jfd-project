const { Assignment, Resource, Project } = require('../models')

module.exports = {
    async getAssignmentDetails (req, res) {
        try {
            console.log(req.params)
            const assignments = await Assignment.findAll({
                where: {
                    ResourceId: req.query.resourceId,
                    ProjectId: req.query.projectId
                },
                include: [
                    {
                        model: Resource,
                        attributes: ['fio']
                    },
                    {
                        model: Project,
                        attributes: ['name', 'startDate', 'endDate', 'manager'] 
                    }
                ]
            });
            // return assignments.map(assignment => {
            //     return{
            //         fio: assignment.Resource.fio,
            //         name: assignment.Project.name,
            //         startDate: assignment.Project.startDate,
            //         endDate: assignment.endDate,
            //         manager: assignment.Project.manager
            //     }
            // })
            res.status(200).send({
                data: assignments
            })
        } catch (err) {
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