

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { db } from "../firebase/firebaseConfig";
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const dbRef = ref(db, "users");
      const snapshot = await get(dbRef);

      console.log("Fetched Data:", snapshot.val());

      if (snapshot.exists()) {
        const users = snapshot.val();
        const user = Object.values(users).find(
          (u) => u[0].useremailid === email && u[0].password === password
        );

        if (user) {
          const token = `${user.id}-${new Date().getTime()}`;
          localStorage.setItem("authToken", token);
          return token;
        } else {
          return rejectWithValue("Invalid email or password.");
        }
      } else {
        return rejectWithValue("No users found.");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      return rejectWithValue("Failed to login. Please try again later.");
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("authToken");
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("authToken") || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      });
  },
});

export default authSlice.reducer;