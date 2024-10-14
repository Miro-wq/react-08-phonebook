import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../components/redux/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from '../Register/Register.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const result = await dispatch(register({ name, email, password }));
      if (register.fulfilled.match(result)) {
        navigate('/contacts');
      } else {
        throw new Error(result.error.message || 'Registration failed.');
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.registerLabel}>
          Name:
          <input
            className={styles.registerInput}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label className={styles.registerLabel}>
          Email:
          <input
            className={styles.registerInput}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label className={styles.registerLabel}>
          Password:
          <input
            className={styles.registerInput}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button
          className={styles.registerBtn}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </form>
    </div>
  );
};

export default Register;
