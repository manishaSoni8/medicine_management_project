
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebaseConfig"; 
import { ref, push, get } from "firebase/database";

export const fetchEmployees = createAsyncThunk("employees/fetchEmployees", async (_, { rejectWithValue }) => {
  try {
    const snapshot = await get(ref(db, "dashboards/0/values"));
    const data = snapshot.val();
    return data ? Object.keys(data).map((id) => ({ id, ...data[id] })) : [];
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const addEmployee = createAsyncThunk("employees/addEmployee", async (employeeData, { rejectWithValue }) => {
  try {
    const newEmployeeRef = push(ref(db, "dashboards/0/values"), employeeData);
    return { id: newEmployeeRef.key, ...employeeData };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const employeeSlice = createSlice({
  name: "employees",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload); 
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default employeeSlice.reducer;
