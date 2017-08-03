import React from 'react';
import styles from './styles/ShoppingCart';

export default ({ items, quantity }) => {
  return (
    <div style={styles.root}>
      <div style={styles.receipt}>
        { items.map(item => {
            return <div style={{display: 'flex', justifyContent: 'flex-end'}} key={item.id}>
              <span style={{float: 'left'}}>{item.name}</span>
              <div style={{textAlign: 'right', borderBottom: 'dotted', width: 400}}>x{quantity[item.id]}</div>
            </div>
          })
        }
        <div style={{textAlign: 'right', marginTop: 30, width: '100%'}}> Total: $
        {items.reduce((sum, item) => {
          return sum + item.price * quantity[item.id]
        }, 0)}</div>
      </div>
    </div>
)}
