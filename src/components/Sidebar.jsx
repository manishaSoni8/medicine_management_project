import React from "react";
import { Link } from "react-router-dom";

import dashBoardImg from '../assets/dashboard.png';
import empIconImg from '../assets/emp-icon.png';
import medicineImg from '../assets/capsule.png';
import syringeImg from '../assets/syringe.png';
import allergiesImg from '../assets/allergies.png';
import trialImg from '../assets/individuals-trials.png';
import logoutImg from '../assets/logout.png';
const Sidebar = () => {
  return (
    <div className="sidebar">
    
      <ul className="sidebar-menu">
        <li className="d-flex "><Link to="/admin-dashboard"><img src={dashBoardImg} alt="dashboard img" /> Dashboard</Link></li>
        <li className="d-flex "><Link to="/admin-employees"><img src={empIconImg} alt="employee icon img" /> Employees</Link></li>
        <li className="d-flex"><Link to="/admin-medicines"><img src={medicineImg} alt="medicine img" /> Medicines</Link></li>
        <li className="d-flex "><Link to="/admin-medicine-trials"><img src={syringeImg} alt="syringe img" /> Medicine Trials</Link></li>
        <li className="d-flex "><Link to="/admin-allergies"><img src={allergiesImg} alt="allergies img" /> Allergies</Link></li>
        <li className="d-flex "><Link to="/admin-individual-trials"><img src={trialImg} alt="trial img" />Individual Trials</Link></li>
        <li className="d-flex "><Link to="/admin-logout"><img src={logoutImg} alt="logout img" /> Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
