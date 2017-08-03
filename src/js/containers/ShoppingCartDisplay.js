import { connect } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
import { removeFromCart, decrementQuantityInCart } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    items: extractItemInformationFromCart(state.cart.items, state.stock.products),
    quantity: state.cart.quantity
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onRemoveFromCartClick: (id) => {
      dispach(removeFromCart(id, state.cart.quantity[id]))
    },
    onDecrementQuantityClick: (id) => {
      dispach(decrementQuantityInCart(id))
    }
  }
}

function extractItemInformationFromCart(itemIDs, products) {
  return itemIDs.map(id => {
    return products.find(p => p.id === id);
  })
}

const ShoppingCartDisplay = connect(
  mapStateToProps,
  mapDispachToProps
)(ShoppingCart)

export default ShoppingCartDisplay
