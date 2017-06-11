import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import styles from './styles/ShoppingCartPreview';
import { values } from 'lodash';

const ShoppingCartPreview = ({ quantity }) => {
  return (
    <div style={styles.root}>
      <Link to={`/cart`} style={styles.link}>
        <FontAwesome name='shopping-cart' />
      </Link>
      <span style={styles.quantity}>{ values(quantity).reduce((a, b) => a + b, 0) } items in cart</span>
    </div>
  )
}

export default ShoppingCartPreview
