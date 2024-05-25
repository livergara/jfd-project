import Api from "./Api";

export default {
    index () {
        return Api().get('resources')
    },
    post (resource) {
        return Api().post('resources', resource)
    }
}
