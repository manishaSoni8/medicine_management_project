
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Filter from "../../../components/Filter";
import TableComponent from "../../../components/TableComponent";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer/Footer";
import Pagination from "../../../components/Pagination";

const MedicineList = () => {
  const medicines = useLoaderData() || [];
  const [searchQuery, setSearchQuery] = useState("");

  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

 
  const filteredMedicines = medicines.filter((med) =>
    med.medicinename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    { header: "S.No", field: "index" },
    { header: "Medicine Name", field: "medicinename" },
    { header: "Dosage", field: "dosage" },
    { header: "Agents", field: "agent" },
    { header: "Diagnose", field: "diagnose" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const totalPages = Math.ceil(medicines.length / recordsPerPage);
  
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredMedicines.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="dashboard-container d-flex">
      <div className="dashboard-content p-4">
        <h2 className="text-success">Medicine List</h2>
        <Filter searchTerm={searchQuery} onSearch={handleSearch} placeholder="Search Medicine by Name"/>
        <TableComponent
          columns={columns}
          data={currentRecords.map((med, index) => ({
            ...med,
            index: index + 1,
          }))}
        />
      </div>
     
    </div>
     <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage} />
    <Footer/>
    </>
  );
};

export default MedicineList;
