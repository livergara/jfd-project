import Api from "./Api";

export default {
    getAssignmentDetails () {
        return Api().get('assignments')
    }
}
