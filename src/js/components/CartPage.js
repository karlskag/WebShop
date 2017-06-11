import React from 'react';
import styles from './styles/CartPage';
import ShoppingCartDisplay from '../containers/ShoppingCartDisplay';

export default ({ cart }) => {
  return (
    <div style={styles}>
      <ShoppingCartDisplay />
    </div>
)}
