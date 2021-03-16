import React, { Component } from "react";
import API from "../utils/API";
import EmpFilter from "./EmpFilter";
import EmpSort from "./EmpSort";


class EmployeeTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            filteredResults: [],
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
                    results: res.data.results,
                    filteredResults: res.data.results,
                })
            )
            .catch(err => console.log(err));

    };

    sortEmps = () => {
        const filteredResults =
            this.state.results.sort(function (a, b) {
                if (a.location.city < b.location.city) { return -1; }
                if (a.location.city > b.location.city) { return 1; }
                return 0;
            })

        console.log(filteredResults);
        this.setState({ filteredResults })
    }

    filterAge


    renderTable = () => {
        return this.state.filteredResults.map(results => {
            return (
                <tr key={results.id.value} >
                    <td className="card"><img src={results.picture.medium} alt='employee pic' width='150'></img></td>
                    <td> Name: {results.name.first} {results.name.last}</td>
                    <td>Email: {results.email}</td>
                    <td>Phone: {results.phone}</td>
                    Location: {results.location.city}, {results.location.state}\n
                    Age: {results.dob.age}
                </tr >
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
                <div><EmpSort sortEmps={this.sortEmps} />
                    <EmpFilter />
                    <table className="table table-striped">
                        <thead className="text-center">Employee List</thead>
                        <tbody>{this.renderTable()}</tbody>
                    </table>
                </div>
            ) : (
                <div>No Data</div>
            );
    }
}

export default EmployeeTable;