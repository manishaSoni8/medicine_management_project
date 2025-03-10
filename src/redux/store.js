

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import employeeReducer from "./employeeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    employees: employeeReducer,
  },
});

export default store;


