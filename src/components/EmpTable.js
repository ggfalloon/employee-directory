import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class EmployeeTable extends Component {
    state = {
        image: "",
        name: "",
        email: "",
        phone: 0,
        location: "",
        age: 0
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        API.getAllEmp()
            .then(res => this.setState())
            .catch(err => console.log(err));
    }
    // Replace our component's state with newState, load the next dog image

    render() {
        return (
            <div>
                <h1 className="text-center">Employee List</h1>
                <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />

            </div>
        );
    }
}

export default EmployeeTable;
