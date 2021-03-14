import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import EmployeeTable from "./components/EmpTable";
import EmpFilter from "./components/EmpFilter";
import EmpSort from "./components/EmpSort";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Wrapper>
          <h1 className="mx-auto mt-3">Employee Directory</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <EmpFilter />
            </div>
            <div className="col-sm">
              <EmpSort />
            </div>
          </div>
          <div className="row mt-3">
            <EmployeeTable />

          </div>
        </Wrapper>
      </div>


    </div>

  );
}

export default App;
