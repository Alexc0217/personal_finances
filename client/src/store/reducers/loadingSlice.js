import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
