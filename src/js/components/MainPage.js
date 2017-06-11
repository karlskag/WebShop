import React from 'react';
import styles from './styles/MainPage';
import ItemHolderDisplay from '../containers/ItemHolderDisplay';
import ShoppingCartPreviewDisplay from '../containers/ShoppingCartPreviewDisplay';

export default () => (
  <div style={styles}>
    WEBSHOP
    <ShoppingCartPreviewDisplay />
    <ItemHolderDisplay />
  </div>
)
