import { connect } from 'react-redux';
import ShoppingCartPreview from '../components/ShoppingCartPreview';

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    quantity: state.cart.quantity
  }
}

const mapDispachToProps = (dispach) => {
  return {}
}

const ShoppingCartPreviewDisplay = connect(
  mapStateToProps,
  mapDispachToProps
)(ShoppingCartPreview)

export default ShoppingCartPreviewDisplay
