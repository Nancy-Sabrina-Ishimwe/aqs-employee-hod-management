import React from "react";

const Memberlist = ({ employees = [] }) => {
  const hodsUsers = employees?.["hods users"] || [];

  // Employees with team
  const membersTeam = hodsUsers.filter((emp) => emp.team);

  // Employees with no team
  const membersNoTeam = hodsUsers.filter((emp) => !emp.team);

  return (
    <div className="p-4">
      <h2 className="text-center font-bold text-lg mb-4">
        All Employees in a Team
      </h2>
      {membersTeam.length > 0 ? (
        <table className="table-auto w-full bg-white shadow-lg text-center mb-8">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">No</th>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Phone Number</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {membersTeam.map((emp, idx) => (
              <tr key={emp.id} className="border-b">
                <td className="p-2">{idx + 1}</td>
                <td>{emp.id}</td>
                <td>{emp.employee_name}</td>
                <td>{emp.email || "N/A"}</td>
                <td>{emp.position || "N/A"}</td>
                <td>{emp.contact_number}</td>
                <td>{emp.team || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 mb-8">
          No employees are currently available.
        </p>
      )}

      <h2 className="text-center font-bold text-lg mb-4">
        All Employees not in a Team
      </h2>
      {membersNoTeam.length > 0 ? (
        <table className="table-auto w-full bg-white shadow-lg text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">No</th>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Phone Number</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {membersNoTeam.map((emp, idx) => (
              <tr key={emp.id} className="border-b">
                <td className="p-2">{idx + 1}</td>
                <td>{emp.id}</td>
                <td>{emp.employee_name}</td>
                <td>{emp.email || "N/A"}</td>
                <td>{emp.position || "N/A"}</td>
                <td>{emp.contact_number}</td>
                <td>-</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">
          All employees are currently assigned to a team.
        </p>
      )}
    </div>
  );
};

export default Memberlist;
