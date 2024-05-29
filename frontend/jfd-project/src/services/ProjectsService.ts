import Api from "./Api";

export default {
    index () {
        return Api().get('projects')
    },
    show (projectId: any) {
        return Api().get(`projects/${projectId}`)
    },
    post (project: any) {
        return Api().post('projects', project)
    },
    put (project: any) {
        return Api().put(`projects/${project.id}`, project)
    }
}
