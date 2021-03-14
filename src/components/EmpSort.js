import React from "react";

function EmpSort(props) {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filter by Age Group
        </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item" href="#">18 - 35</li>
                <li className="dropdown-item" href="#">36 - 55</li>
                <li className="dropdown-item" href="#">56 +</li>
            </ul>
        </div>
    )
}

export default EmpSort;