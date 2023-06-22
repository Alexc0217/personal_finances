import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountStats: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountStats: (state, data) => {
      state.accountStats = data;
    },
  },
});

export const { setAccountStats } = accountSlice.actions;

export default accountSlice.reducer;
