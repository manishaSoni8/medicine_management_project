
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, addEmployee } from "../../../redux/employeeSlice";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import SummaryCard from "../../../components/dashboard-modules/SummaryCard";
import PieChart from "../../../components/dashboard-modules/PieChart";
import BarChart from "../../../components/dashboard-modules/BarChart";
import EmployeeTable from "../../../components/dashboard-modules/EmployeeTable";
import AddEmployeeModal from "../../../components/modal/AddEmployeeModal";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../../../components/Pagination";
 
const Dashboard = () => {
 // const data = useLoaderData();
  //   const employeesData = data.find((item) => item.title === "Employees")?.values;
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [employees, setEmployees] = useState(Array.isArray(employeesData) ? employeesData : []);
  //   const medicines = data.find((item) => item.title === "Medicines")?.values || [];
  //   const allergies = data.find((item) => item.title === "Allergies")?.values || [];
   
  
  //   const fetchEmployees = async () => {
  //     try {
  //       const snapshot = await get(ref(db, "dashboards/0/values"));
  //       const employeeData = snapshot.val();
  //       setEmployees(employeeData ? Object.values(employeeData) : []);
  //     } catch (error) {
  //       console.error("Error fetching employees:", error);
  //       setEmployees([]); 
  //     }
  //   };
    
  //   useEffect(() => {
  //     fetchEmployees();
  //   }, [employees]);
   
  //   const handleAddEmployee = async (newEmployee) => {
  //     try {
  //      push(ref(db, "dashboards/0/values"), newEmployee);
  //       await fetchEmployees(); 
  //     } catch (error) {
  //       console.error("Error adding employee:", error);
  //     }
  //   };
   
  const dispatch = useDispatch();
  const data = useLoaderData();
  const employees = useSelector((state) => state.employees.list);
  
  const medicines = data.find((item) => item.title === "Medicines")?.values || [];
 const allergies = data.find((item) => item.title === "Allergies")?.values || [];
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
 
  useEffect(() => {
      dispatch(fetchEmployees());
  }, []);
 
  const handleAddEmployee = (newEmployee) => {
    dispatch(addEmployee(newEmployee));
  };
 
  const totalPages = Math.ceil(employees.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = employees.slice(indexOfFirstRecord, indexOfLastRecord);
 
  const departmentData =
    employees.length > 0
      ? employees.reduce((acc, emp) => {
          acc[emp.department] = (acc[emp.department] || 0) + 1;
          return acc;
        }, {})
      : {};
 
  const allergyData =
    allergies.length > 0
      ? allergies.reduce((acc, allergy) => {
          acc[allergy.allergyname] = (acc[allergy.allergyname] || 0) + 1;
          return acc;
        }, {})
      : {};
 
  return (
    <div>
      <Header />
      <div className="dashboard-container d-flex">
        <Sidebar />
        <div className="dashboard-content p-4">
          <button
            className="btn btn-primary mb-5"
            onClick={() => setIsModalOpen(true)}
          >
            Add Employee
          </button>
 
          
          <SummaryCard
            totalEmployees={employees.length}
            totalMedicines={medicines.length}
            totalAllergy={allergies.length}
          />
 
        
          <div className="charts">
            <PieChart departmentData={departmentData} />
            <BarChart allergyData={allergyData} />
          </div>
 
        
          <EmployeeTable employees={currentRecords} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
 
 
      {isModalOpen && (
        <AddEmployeeModal
          onClose={() => setIsModalOpen(false)}
          onEmployeeAdded={handleAddEmployee}
        />
      )}
    </div>
  );
};
 
export default Dashboard;