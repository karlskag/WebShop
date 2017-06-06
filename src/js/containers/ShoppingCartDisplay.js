import { connect } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.cart.items,
    quantity: state.cart.quantity
  }
}

const mapDispachToProps = (dispach) => {
  return {}
}

const ShoppingCartDisplay = connect(
  mapStateToProps,
  mapDispachToProps
)(ShoppingCart)

export default ShoppingCartDisplay
