import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.title}>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
