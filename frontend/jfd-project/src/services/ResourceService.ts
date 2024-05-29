import Api from "./Api";

export default {
    index () {
        return Api().get('resources')
    },
    show (resourceId: any) {
        return Api().get(`resources/${resourceId}`)
    },
    post (resource: any) {
        return Api().post('resources', resource)
    },
    put (resource: any) {
        return Api().put(`resources/${resource.id}`, resource)
    }
}
