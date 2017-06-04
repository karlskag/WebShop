import React from 'react';
import styles from './styles/AddButton';

const AddButton = ({ stock, onClick }) => (
  <button style={styles} onClick={onClick}>Add to Cart</button>
)

export default AddButton;
