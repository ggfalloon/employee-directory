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
        // const rows = [];
        // const employee = this.props.name

        // this.props.employees.forEach((employee) =>
        // rows.push({this.employee.state})

        // ))
        return (
            <div>
                <h1 className="text-center">Employee List</h1>
                <table>
                    <tbody><Card image={this.state.image} handleBtnClick={this.handleBtnClick} /></tbody>

                </table>


            </div>
        );
    }
}

export default EmployeeTable;
