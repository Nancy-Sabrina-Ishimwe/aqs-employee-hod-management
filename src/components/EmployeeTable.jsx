// EmployeeTable.js
import React from 'react';
import './EmployeeTable.css';

const EmployeeTable = () => {
  return (
    <div className="employee-table">
      <div className="actions">
        <button>Create an email for the employee</button>
        <button>Add new employee to the team</button>
      </div>
      <div className="table-section">
        <h3>Member in a team</h3>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Gender</th>
              <th>Fullname</th>
              <th>Nationality</th>
              <th>Team</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12002655014</td>
              <td>Female</td>
              <td>Andrea Umuhire</td>
              <td>Rwandan</td>
              <td>PP</td>
              <td>
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <h3>Member not in a team</h3>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Gender</th>
              <th>Fullname</th>
              <th>Nationality</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2020455014</td>
              <td>Female</td>
              <td>Andrea Umuhire</td>
              <td>Rwandan</td>
              <td>
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
