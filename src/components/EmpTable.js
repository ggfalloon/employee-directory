import React, { Component } from "react";
import API from "../utils/API";


class EmployeeTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            error: false
        };
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.loadAllEmps();
    }

    // Replace our component's state with newState, load the next dog image
    loadAllEmps = () => {
        API.getAllEmp()
            .then(res =>
                this.setState({
                    results: res.data.results
                })
            )
            .catch(err => console.log(err));

    };


    renderTable = () => {
        return this.state.results.map(results => {
            return (
                <tr key={results.id} >
                    <td>{results.name}</td>
                </tr>
            )
        })
    }


    render() {
        const { results, error } = this.state

        if (error) {
            return <div>Error ...</div>
        }

        return results.length > 0
            ? (
                <table>
                    <thead className="text-center">Employee List</thead>
                    <tbody>{this.renderTable}</tbody>
                </table>
            ) : (
                <div>No Data</div>
            );
    }
}

export default EmployeeTable;

/* picture: res.data.picture,
    name: res.data.name,
        email: res.data.email,
            phone: res.data.phone,
                location: res.data.location,
                    age: res.data.age */