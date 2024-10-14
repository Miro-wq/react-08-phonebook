import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../components/redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error);
  const isLoading = useSelector(state => state.auth.isLoading);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password })).then((result) => {
      if (result.type === 'auth/login/fulfilled') {
        navigate('/contacts');
      }
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default Login;
