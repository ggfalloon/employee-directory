import axios from "axios";

export default {
    getAllEmp: function () {
        return axios.get("https://randomuser.me/api/?nat=us&results=15");
    }

};

   // getByLocation: function (location) {
    //     return axios.get();
    // },
    // filterByAge: function () {
    //     return axios.get();
    // },
    // getRandomEmp: function () {
    //     return axios.get();
    // }