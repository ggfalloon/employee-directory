import React from "react";

function EmpFilter(props) {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filter by Age Group
        </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">18 - 35</a></li>
                <li><a className="dropdown-item" href="#">36 - 55</a></li>
                <li><a className="dropdown-item" href="#">56 +</a></li>
            </ul>
        </div>
    )
}

export default EmpFilter;