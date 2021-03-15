import React, { Component } from "react";
import API from "../utils/API";


class EmployeeTable extends Component {
    state = {
        picture: "",
        name: "",
        email: "",
        phone: 0,
        location: "",
        age: 0
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.loadAllEmps();
    }

    // Replace our component's state with newState, load the next dog image
    loadAllEmps = () => {
        API.getAllEmp()
            .then(res =>
                this.setState([{
                    picture: res.data.picture,
                    name: res.data.name,
                    email: res.data.email,
                    phone: res.data.phone,
                    location: res.data.location,
                    age: res.data.age
                }])
            )
            .catch(err => console.log(err));
    };

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
                    <tbody>{this.state.picture}</tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeTable;
