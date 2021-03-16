import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import EmployeeTable from "./components/EmpTable";



function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Wrapper>
          <h1 className="mx-auto text-center">Employee Directory</h1>
          <div className="row mt-3">
            <div className="col-sm">

            </div>
            <div className="col-sm">

            </div>
          </div>
          <div className="table-responsive">
            <EmployeeTable />

          </div>
        </Wrapper>
      </div>


    </div>

  );
}

export default App;
