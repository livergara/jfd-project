import Api from "./Api";

export default {
    index () {
        return Api().get('resources')
    },
    show (resourceId) {
        return Api().get(`resources/${resourceId}`)
    },
    post (resource) {
        return Api().post('resources', resource)
    }
}
