import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchContacts } from '../redux/contactSlice';
import Navigation from '../Navigation/Navigation';
import Contacts from '../../Pages/Contacts';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';
import UserMenu from '../UserMenu/UserMenu';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <div>
      <Navigation />
      {token && <UserMenu />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/contacts" 
          element={token ? <Contacts /> : <Navigate to="/login" replace />} 
        />
      </Routes>
    </div>
  );
};

export default App;
