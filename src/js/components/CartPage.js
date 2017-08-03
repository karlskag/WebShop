import React from 'react';
import * as styles from './styles/CartPage';
import ShoppingCartDisplay from '../containers/ShoppingCartDisplay';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

export default ({ cart }) => {
  return (
    <div style={styles.root}>
      CART
      <div style={{display: 'flex', justifyContent: 'center', width: 200, marginTop: -50, marginBottom: 10}}>
        <Link to={`/`} style={styles.link}>
          <FontAwesome name='arrow-left' />
        </Link>
        <span style={{fontSize: 30, marginLeft: 15, marginRight: 15, color: '#373737'}}>or</span>
        <Link to={`/checkout`} style={styles.link}>
          <FontAwesome name='credit-card' />
        </Link>
      </div>
      <ShoppingCartDisplay />
    </div>
)}
