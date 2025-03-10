import React from "react";
import employeeImg from "../../assets/employee.png";
import medicineImg from "../../assets/medicine.png";
import allergyImg from "../../assets/allergy.png";

const SummaryCard = ({ totalEmployees, totalMedicines, totalAllergy }) => {
  const cards = [
    { title: "Total Employees", value: totalEmployees, img: employeeImg },
    { title: "Total Medicines", value: totalMedicines, img: medicineImg },
    { title: "Total Allergy", value: totalAllergy, img: allergyImg },
  ];

  return (
    <div className="row">
      {cards.map((card, index) => (
        <div key={index} className="col-md-4 ">
          <div className="card p-3 text-center shadow">
            <div className="d-flex">
              <img src={card.img} alt={card.title} />
              <h4 className="text-success">{card.title}</h4>
            </div>
            <h3 className="text-danger text-start">{card.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;