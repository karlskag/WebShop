import React from 'react';
import styles from './styles/CartItemIcons';
import FontAwesome from 'react-fontawesome';

export default ({id, quantity, onDecrementClick, onRemoveClick}) => {
  return (
    <div>
      (<FontAwesome style={styles.icon} name='minus' onClick={() => onDecrementClick(id)} />
      <span style={{marginLeft: 10}}></span>
      <FontAwesome style={styles.icon} name='trash' onClick={() => onRemoveClick(id, quantity)} />)
    </div>
  )
}
