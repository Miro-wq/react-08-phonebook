import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});
