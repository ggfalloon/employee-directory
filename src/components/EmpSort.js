import React from "react";

function EmpSort(props) {
    return (

        <button type="button" className="btn btn-secondary" onClick={props.sortEmps}>Sort By First Name</button>

    )
}

export default EmpSort;