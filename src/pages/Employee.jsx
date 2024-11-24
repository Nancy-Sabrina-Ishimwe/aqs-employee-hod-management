import React, { useState, useEffect } from "react";
import { IoMdAdd, IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EmployeeList from "../components/Memberlist";
// import Addmember from "./Addmember";
import { fetchEmployees } from "../Store/Data/EmployeeSlice";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch employees data on component mount
  useEffect(() => {
    const loadEmployees = async () => {
      const response = await dispatch(fetchEmployees());
      if (response && response.payload) {
        setEmployees(response.payload);
      }
    };
    loadEmployees();
  }, [dispatch]);

  // const addEmployee = (employee) => {
  //   setEmployees([...employees, employee]);
  // };

  // const assignTeam = (id, team) => {
  //   setEmployees(
  //     employees.map((emp) => (emp.id === id ? { ...emp, team } : emp))
  //   );
  // };

  const handleCreateEmailClick = () => {
    navigate("/dashboard/createemailemployee");
  };

  const handleAddMemberClick = () => {
    navigate("/dashboard/addmember");
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="flex space-x-4">
        <button
          className="bg-[#264667] text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          onClick={handleCreateEmailClick}
        >
          Create an email of the employee
          <IoMdMail />
        </button>

        <button
          className="bg-[#264667] text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          onClick={handleAddMemberClick}
        >
          Add the employee to the team
          <IoMdAdd />
        </button>
      </div>

      <EmployeeList employees={employees} />
    </div>
  );
};

export default Employee;
