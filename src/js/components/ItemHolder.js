import React from 'react';
import styles from './styles/ItemHolder';
import Item from './Item';

const ItemHolder = ({products, quantity, onAddToCartClick}) => (
    <div style={styles}>
    {products.map(prod => (
      <Item key={prod.id} product={prod} quantity={quantity[prod.id]} onClick={onAddToCartClick}/>
    ))}
  </div>
)

export default ItemHolder
