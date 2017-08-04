import React from 'react';
import styles from './styles/ShoppingCart';
import CartItemIcons from './CartItemIcons';

export default ({ items, quantity, onDecrementQuantityClick, onRemoveFromCartClick}) => {
  return (
    <div style={styles.root}>
      <div style={styles.receipt}>
        { items.length !== 0 ?
          items.map(item => {
            return <div style={{display: 'flex', justifyContent: 'flex-end'}} key={item.id}>
              <span style={{float: 'left'}}>{item.name}</span>
              <div style={{textAlign: 'right', borderBottom: 'dotted', width: 330}}>x{quantity[item.id]}</div>
              <span style={{marginLeft: 10}}>
                <CartItemIcons
                  onDecrementClick={onDecrementQuantityClick}
                  onRemoveClick={onRemoveFromCartClick}
                  id={item.id}
                  quantity={quantity[item.id]}/>
              </span>
            </div>
          }) : <span style={{marginLeft: 20, marginRight: 20}}> Your cart is empty! :( </span>
        }
        <div style={{textAlign: 'right', marginTop: 30, width: '100%'}}> Total: $
          {items.reduce((sum, item) => {
            return sum + item.price * quantity[item.id]
          }, 0)}
        </div>
      </div>
    </div>
)}
