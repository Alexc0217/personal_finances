import { configureStore } from '@reduxjs/toolkit';
import themeSlice from "./reducers/themeSlice";
import loadingSlice from './reducers/loadingSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    loading: loadingSlice,
  },
});
