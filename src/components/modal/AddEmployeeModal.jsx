

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, fetchEmployees } from "../../redux/employeeSlice";
 
const AddEmployeeModal = ({ onClose }) => {
  const dispatch = useDispatch();
 
  const [employeeData, setEmployeeData] = useState({
    name: "",
    department: "",
    designation: "",
    email: "",
  });
 
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
 
  const handleChange = (e) => {
setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
if (!employeeData.name || !employeeData.designation || !employeeData.department || !employeeData.email) {
      alert("All fields are required!");
      return;
    }
    dispatch(addEmployee(employeeData));
    setEmployeeData({ name: "", designation: "", department: "", email: "" });
    dispatch(fetchEmployees());
    onClose();
  };
 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={employeeData.name}
            onChange={handleChange}
            required
          />
 
          
          <select name="designation" value={employeeData.designation} onChange={handleChange} required>
            <option value="">Select Position</option>
            <option value="Surgeon">Surgeon</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Born Specialist">Born Specialist</option>
            <option value="Senior Doctor">Senior Doctor</option>
            <option value="Doctor">Doctor</option>
          </select>
 
         
          <select name="department" value={employeeData.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="Medical">Medical</option>
            <option value="Nursing">Nursing</option>
            <option value="Pharmecy">Pharmecy</option>
            <option value="Paramedical">Paramedical</option>
          </select>
 
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={employeeData.email}
            onChange={handleChange}
            required
          />
 
          <button type="submit" className="bg-success">Add Employee</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};
 
export default AddEmployeeModal;