import React from 'react';
import styles from './styles/ItemHolder';

const ItemHolder = ({products}) => (
  <div style={styles}>
    {products.map(prod => (
      <div style={{margin:20}} key={prod.id}>{prod.name}</div>
    ))}
  </div>
  // products.map(prod => <div key={prod.id} style={styles}> { prod.name } </div>)
)

export default ItemHolder
