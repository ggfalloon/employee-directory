import axios from "axios";

export default {
    getAllEmp: function () {
        return axios.get('https://randomuser.me/api/');
    }
    // getByLocation: function (location) {
    //     return axios.get();
    // },
    // filterByAge: function () {
    //     return axios.get();
    // },
    // getRandomEmp: function () {
    //     return axios.get();
    // }
};