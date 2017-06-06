import React from 'react';
import styles from './styles/MainPage';
import ItemHolderDisplay from '../containers/ItemHolderDisplay';
import ShoppingCartDisplay from '../containers/ShoppingCartDisplay';

export default () => (
  <div style={styles}>
    WEBSHOP
    <ShoppingCartDisplay />
    <ItemHolderDisplay />
  </div>
)
