import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableComponent from "../../../components/TableComponent";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Pagination from "../../../components/Pagination";
const IndividualTrials = () => {
  const { individualTrials } = useLoaderData() || { individualTrials: {} };
  const trialsData = Array.isArray(individualTrials.values) ? individualTrials.values : [];
  console.log("Processed Individual Trials Data:", trialsData);


  if (trialsData.length > 0) {
    console.log("Sample Trial Object:", trialsData[0]);
  }

  const columns = [
    { header: "S.No", field: "index" },
    
    { header: "Participant Name", field: "participantname" }, 
    { header: "Medicine Name", field: "medicinename" }, 
    { header: "Medicine Date", field: "date" }, 
    { header: "Result", field: "result" }, 
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const totalPages = Math.ceil(trialsData.length / recordsPerPage);
  
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = trialsData.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="dashboard-container d-flex">
      <div className="dashboard-content p-4">
        <h2 className="text-success">Individual Trials</h2>
        {trialsData.length === 0 ? (
          <p className="text-danger">No trials available</p>
        ) : (
          <TableComponent
            columns={columns}
            data={currentRecords.map((trial, index) => ({
              index: index + 1,
              participantname: trial.participantname || "N/A", 
              medicinename: trial.medicinename || "N/A", 
              date: trial.date || "N/A", 
              result: trial.result || "N/A",
            }))}
          />
        )}
      </div>
      
    </div>
    <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage} />
    <Footer/>
    </>
  );
};

export default IndividualTrials;

