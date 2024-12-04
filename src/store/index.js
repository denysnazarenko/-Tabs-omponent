import { configureStore } from "@reduxjs/toolkit";
import tabs from '../components/tabContainer/TabsSlice';

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  try {
    const state = store.getState();
    localStorage.setItem('tabsState', JSON.stringify(state.tabs));
  } catch (error) {
    console.error('Failed to save state to localStorage', error);
  }
  return result;
};

const store = configureStore({
  reducer: { tabs },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;