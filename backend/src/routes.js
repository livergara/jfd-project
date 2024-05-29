const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ResourceController = require('./controllers/ResourceController')
const ProjectController = require('./controllers/ProjectController')
const AssignmentController = require('./controllers/AssignmentController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.get('/resources',
        ResourceController.index)
    app.get('/resources/:resourceId',
        ResourceController.show)
    app.put('/resources/:resourceId',
        ResourceController.put)
    app.post('/resources',
        ResourceController.post)

    app.get('/projects',
        ProjectController.index)
    app.get('/projects/:projectId',
        ProjectController.show)
    app.put('/projects/:projectId',
        ProjectController.put)
    app.post('/projects',
        ProjectController.post)

    app.get('/assignments',
        AssignmentController.getAssignmentDetails)
    app.post('/assignments',
        AssignmentController.post)

}