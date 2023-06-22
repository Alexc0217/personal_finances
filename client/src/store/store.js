import { configureStore } from '@reduxjs/toolkit';
import themeSlice from "./reducers/themeSlice";
import loadingSlice from './reducers/loadingSlice';
import accountSlice from './reducers/accountSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    loading: loadingSlice,
    account: accountSlice,
  },
});
