import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    // contacts: persistedReducer,
    contacts: contactsReducer,
  },
});
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           'persist/PERSIST',
//           'persist/REHYDRATE',
//           'contacts/fetchAll/fulfilled',
//           'contacts/addContact/fulfilled',
//           'contacts/deleteContact/fulfilled',
//         ],
//       },
//     }),
// });

// export const persistor = persistStore(store);
