import React from 'react';
import styles from './styles/AddButton';

const AddButton = ({ onClick, quantity }) => {
  if (quantity <= 0) return <button style={styles.disabled}>Out of stock</button>
  return <button style={styles.ok} onClick={onClick}>Add to Cart</button>
}

export default AddButton;
