import React from "react";
import Dropdown from "react-bootstrap/Dropdown";


function EmpFilter(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter By Age Group
        </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={props.filterOne}>18 - 35</Dropdown.Item>
                <Dropdown.Item onClick={props.filterTwo}>36 - 55</Dropdown.Item>
                <Dropdown.Item onClick={props.filterThree}>56 +</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default EmpFilter;
