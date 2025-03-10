import React from "react";

const EmployeeTable = ({ employees }) => {
  return (
    <div className="table-responsive ">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="bg-success text-white">Name</th>
            <th className="bg-danger text-white">Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td className="bg-success text-white">{emp.name}</td>
              <td className="bg-danger text-white">{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
