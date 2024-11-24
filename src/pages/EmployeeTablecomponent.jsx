// App.js
import React from 'react';
import HodSidebare from '../Components/HodSidebare';
import Navbar from '../Components/Navbar';
import EmployeeTable from '../Components/EmployeeTable';
import './EmployeeTable.css';

function EmployeeTablecomponent() {
  return (
    <div className="App">
      <HodSidebare />
      <Navbar />
      <EmployeeTable />
    </div>
  );
}

export default EmployeeTablecomponent;
