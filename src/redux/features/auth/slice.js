import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PREFIXES from "../../prefixes";

const { NAME, ACTIONS } = PREFIXES.AUTH;

const initialState = {
  loading: false,
  token: null,
  user: {},
  error: null,
};

const authSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.token = null;
      state.user = {};
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("state", state);
      console.log("action", action);
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.user = {};
      state.error = action.error;
    });
  },
});

export default authSlice;

export const login = createAsyncThunk(ACTIONS.LOGIN, (payload) => {
  const promise = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({
          token: "jwt-token",
          user: payload,
        });
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
});

export const signup = createAsyncThunk(ACTIONS.SIGNUP, (payload) => {
  const promise = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({
          token: "jwt-token",
          user: payload,
        });
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
});
