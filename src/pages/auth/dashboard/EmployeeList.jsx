 import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../../redux/employeeSlice";
import Filter from "../../../components/Filter";
import TableComponent from "../../../components/TableComponent";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Pagination from "../../../components/Pagination";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { list: employees = [], status, error } = useSelector((state) => state.employees);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())|| emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );
const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 5;
const totalPages = Math.ceil(employees.length / recordsPerPage);

const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = filteredEmployees.slice(indexOfFirstRecord, indexOfLastRecord);
   
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
   
  };
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  console.log("Employees from Redux:", employees);

  
  const columns = [
    { header: "S.No", field: "index" },
    { header: "Name", field: "name" },
    { header: "Email", field: "email" },
    { header: "Department", field: "department" },
    { header: "Designation", field: "designation" },
  ];
  return (
  <>
      <Sidebar />

        <Header />
        <div className="dashboard-container d-flex">
        <div className="dashboard-content p-4">
          <h2 className="text-success">Employee List</h2>
          <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} placeholder="Search Employee by Name"/>
          {status === "loading" && <p className="text-center">Loading employees...</p>}
          {status === "failed" && <p className="text-center text-red-500">Error: {error}</p>}
          {status === "succeeded" && employees.length > 0 ? (
            <TableComponent columns={columns}   data={currentRecords.map((emp, index) => ({
              ...emp,
              index: index + 1,
            }))} searchTerm={searchTerm} />
          ) : (
            status !== "loading" && <p className="text-center">No employees found.</p>
          )}
        </div>
      
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage} />
     <Footer />
     
    
    </>
  );
 };

export default EmployeeList;
