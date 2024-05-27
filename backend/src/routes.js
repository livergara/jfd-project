const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ResourceController = require('./controllers/ResourceController')

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

}