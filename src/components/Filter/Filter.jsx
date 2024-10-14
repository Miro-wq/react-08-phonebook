import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search by name..."
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
