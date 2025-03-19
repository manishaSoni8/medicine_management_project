
import React, { useState } from "react";

import { useLoaderData } from "react-router-dom";
import TableComponent from "../../../components/TableComponent";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer/Footer";
import Pagination from "../../../components/Pagination"

const MedicineTrials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = useLoaderData() || {};
  const title = data.title || "Medicine Trials";
  const values = Array.isArray(data.values) ? data.values : []; 
  console.log("Raw Data:", data);
  console.log("Values Array:", data.values);

  values.forEach((item, index) => console.log(`Item ${index + 1}:`, item));
  
  const columns = [
    { header: "S.No", field: "serial" },
    { header: "Medicine Name", field: "medicineName" },
    { header: "participents", field: "participents" },
    { header: "Start Date", field: "startDate" },
    { header: "End Date", field: "endDate" },
  ];

  
  const formattedValues = values.map((item, index) => ({
    serial: index + 1,
    medicineName: item?.medicineName || item?.medicinename || "N/A",
    participents: item?.participents ||  "N/A",
    startDate: item?.startDate || item?.startdate || "N/A",
    endDate: item?.endDate || item?.enddate || "N/A",
  }));
  console.log('formattedValues',formattedValues)
  
  const recordsPerPage = 5;
  const totalPages = Math.ceil(values.length / recordsPerPage);
  
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = formattedValues.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="dashboard-container">
      <div className="dashboard-content">
      <h2 className="mb-3 text-success ">{title}</h2>
      <TableComponent columns={columns} data={currentRecords} />
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage} />
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default MedicineTrials;
