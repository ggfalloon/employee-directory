import axios from "axios";

export default {
    getAllEmp: function () {
        return axios.get("https://randomuser.me/api/?nat=us&results=15");
    }

};
