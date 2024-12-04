import { configureStore } from "@reduxjs/toolkit";
import tabs from '../components/tabContainer/TabsSlice';

const store = configureStore({
  reducer: { tabs },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;