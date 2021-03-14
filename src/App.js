import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import EmployeeTable from "./components/EmpTable";
import EmpFilter from "./components/EmpFilter";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Wrapper>
          <h1 className="mt-3">Employee Directory</h1>
          <EmpFilter />
          <div className="row mt-3">
            <EmployeeTable />

          </div>
        </Wrapper>
      </div>


    </div>

  );
}

export default App;
