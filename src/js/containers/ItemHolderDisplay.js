import { connect } from 'react-redux';
import ItemHolder from '../components/ItemHolder';
import { addToCart } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    products: state.stock.products,
    quantity: state.stock.quantity,
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAddToCartClick: (id) => {
      dispach(addToCart(id))
    }
  }
}

const ItemHolderDisplay = connect(
  mapStateToProps,
  mapDispachToProps
)(ItemHolder)

export default ItemHolderDisplay
