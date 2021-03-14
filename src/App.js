import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Wrapper>
          <h1 className="mt-3">Employee Directory</h1>
          <div className="row mt-3">


          </div>
        </Wrapper>
      </div>


    </div>

  );
}

export default App;
