
import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../pages/auth/dashboard/Dashboard.jsx";
import Login from "../pages/auth/Login.jsx";
import EmployeeList from "../pages/auth/dashboard/EmployeeList.jsx";
import MedicineList from "../pages/auth/dashboard/MedicineList.jsx";
import MedicineTrials from "../pages/auth/dashboard/MedicineTrials.jsx";
import AllergyList from "../pages/auth/dashboard/AllergyList.jsx";
import Logout from "../pages/auth/Logout.jsx";
import fetchDashboardData from "../loaders/DashboardLoader.jsx";
import employeeLoader from "../loaders/EmployeeLoader.jsx";
import medicineLoader from "../loaders/MedicineLoader.jsx";
import medicineTrialsLoader from "../loaders/MedicineTrialLoader.jsx";
import allergyLoader from "../loaders/AllergyLoader.jsx";
import IndividualTrials from "../pages/auth/dashboard/IndividualTrials.jsx";
import individualTrialsLoader from "../loaders/IndividualTrials.jsx";
 
const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token); 
  if (!token) return <Navigate to="/admin-login" />;
  return children;
};
 
const PublicRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  if (token) return <Navigate to="/admin-dashboard" />; 
  return children;
};

const router = createBrowserRouter([
  {path: "/",
    element: (
     <PublicRoute>  <Login /></PublicRoute>
     
    
    ),},

  {
    path: "/admin-login",
    element: (
     <PublicRoute>  <Login /></PublicRoute>
     
    
    ),
  },
  {
    path: "/admin-dashboard",
    element: (
      
        <ProtectedRoute><Dashboard /></ProtectedRoute>
     
    ),
    loader: fetchDashboardData,
  },
      {
        path: "admin-employees",
        element: (
         
            <ProtectedRoute><EmployeeList /></ProtectedRoute>
        
        ),
        loader: employeeLoader,
      },
      {
        path: "admin-medicines",
        element: (
        
            <ProtectedRoute><MedicineList /></ProtectedRoute>
         
        ),
        loader: medicineLoader,
      },
      {
        path: "admin-medicine-trials",
        element: (
        
            <ProtectedRoute><MedicineTrials /></ProtectedRoute>
        
        ),
        loader: medicineTrialsLoader,
      },
      {
        path: "admin-allergies",
        element: (
          
            <ProtectedRoute><AllergyList /></ProtectedRoute>
        
        ),
        loader: allergyLoader,
      },
      {
        path: "admin-individual-trials",
        element: (
          
            <ProtectedRoute><IndividualTrials /></ProtectedRoute>
        
        ),
        loader: individualTrialsLoader,
      },
      
    
  {
        path: "admin-logout",
        element: (
          
            <Logout />
        
        ),
      },
]);
 
export default router;