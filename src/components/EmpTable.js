import React, { Component } from "react";
import API from "../utils/API";
import EmpFilter from "./EmpFilter";
import EmpSort from "./EmpSort";

// Sets up EmployeeTable class and state bringing down props to be used by children
class EmployeeTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            filteredResults: [],
            error: false
        };
    };

    // When the component mounts, load the all employees
    componentDidMount() {
        this.loadAllEmps();
    }

    // Replace our component's state with newState from API
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

    // Function used to Sort employees by city
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

    // Functions below are used in the filter by age component
    filterOne = () => {
        const filteredResults = this.state.results.filter(results => results.dob.age <= 35);
        console.log(filteredResults);
        this.setState({ filteredResults })
    }

    filterTwo = () => {
        const filteredResults = this.state.results.filter(results => results.dob.age >= 36 && results.dob.age <= 55);
        console.log(filteredResults);
        this.setState({ filteredResults })
    }

    filterThree = () => {
        const filteredResults = this.state.results.filter(results => results.dob.age >= 56);
        console.log(filteredResults);
        this.setState({ filteredResults })
    }

    // Function that renders a table of employees

    renderTable = () => {
        return this.state.filteredResults.map(results => {
            return (
                <tr key={results.id.value} >
                    <td className="card"><img src={results.picture.medium} alt='employee pic' width='150'></img>
                        <h3>{results.name.first} {results.name.last}</h3>
                        <h5>Email: {results.email}</h5>
                        <h5>Phone: {results.phone}</h5>
                        <h5>Location: {results.location.city}, {results.location.state}</h5>
                        <h5>Age: {results.dob.age}</h5></td>
                </tr >
            )
        })
    }

    // Render function renders actions on the page.
    render() {
        const { results, error } = this.state

        if (error) {
            return <div>Error...</div>
        }

        return results.length > 0
            ? (
                <div className="row mt-3">
                    <div className="col-8">
                        <EmpSort sortEmps={this.sortEmps} />
                        <EmpFilter filterOne={this.filterOne} filterTwo={this.filterTwo} filterThree={this.filterThree} />

                        <table className="table table-striped justify-content-center col-4 mt-3">
                            <tbody>{this.renderTable()}</tbody>
                        </table>
                    </div>

                </div>

            ) : (
                <div>Data Loading...</div>
            );
    }
}

export default EmployeeTable;