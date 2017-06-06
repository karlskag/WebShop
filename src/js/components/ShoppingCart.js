import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles/ShoppingCart';
import { values } from 'lodash';

const ShoppingCart = ({ /*items,*/ quantity }) => {
  return (
    <div style={styles.root}>
      <FontAwesome name='shopping-cart' />
      <span style={styles.quantity}>{ values(quantity).reduce((a, b) => a + b, 0) } items in cart</span>
    </div>
  )
}

export default ShoppingCart
