import Api from "./Api";

export default {
    getAssignmentDetails () {
        return Api().get('assignments')
    },
    post (assignment: any) {
        return Api().post('assignments', assignment)
    },
}
