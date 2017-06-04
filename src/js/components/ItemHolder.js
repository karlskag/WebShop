import React from 'react';
import styles from './styles/ItemHolder';
import Item from './Item';

const ItemHolder = ({products, onAddToCartClick}) => (
    <div style={styles}>
    {products.map(prod => (
      <Item key={prod.id} product={prod} onClick={onAddToCartClick}/>
    ))}
  </div>
)

export default ItemHolder
