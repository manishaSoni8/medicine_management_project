import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableComponent from "../../../components/TableComponent";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Pagination from "../../../components/Pagination";

const AllergyList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const fetchedData = useLoaderData() || {}; 


  console.log("Fetched Allergy Data:", fetchedData);

 
  const allergyList = fetchedData?.values || [];
  console.log("Processed Allergy Data:", allergyList); 

  

  const columns = [
    { header: "S.No", field: "sno" },
    { header: "Medicine Name", field: "medicinename" },
    { header: "Allergy Name", field: "allergyname" },
    { header: "Symptoms", field: "symptoms" },
    { header: "Antiallergy Medicine", field: "antiallergymedicine" },
    
  ];
  
    const recordsPerPage = 5;
    const totalPages = Math.ceil(allergyList.length / recordsPerPage);
    
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = allergyList.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <>
    <Header/>
      <Sidebar />
      <div className="dashboard-container d-flex">
        <div className="dashboard-content p-4">
          <h2 className="text-success">Allergy List</h2>
         

          {allergyList.length > 0 ? (
            <TableComponent
              columns={columns}
              data={currentRecords.map((allergy) => ({
                sno: allergy?.sno || "N/A",
                medicinename: Array.isArray(allergy?.medicinename)
                  ? allergy.medicinename.join(", ")
                  : allergy?.medicinename || "No Medicine",
                allergyname: allergy?.allergyname || "No Name",
                symptoms: allergy?.symptoms || "No Symptoms",
                antiallergymedicine: allergy?.antiallergymedicine || "No Antiallergy Medicine",
                
              }))}
            />
          ) : (
            <p className="text-danger">No records found</p>
          )}
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage} />
      <Footer/>
    </>
  );
};

export default AllergyList;