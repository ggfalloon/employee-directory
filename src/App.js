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
          <h1 className="mx-auto text-center mt-5">Employee Directory</h1>
          <hr></hr>
          <div className="row mt-3">
            <div className="col-sm">
              <div className="table-responsive">
                <EmployeeTable />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
