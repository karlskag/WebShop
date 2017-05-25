import { connect } from 'react-redux';
import ItemHolder from '../components/ItemHolder';
import _ from 'lodash';

const mapStateToProps = (state) => {
  return {
    products: _.values(state.products)
  }
}

const mapDispachToProps = (dispach) => {
  return {

  }
}

const ItemHolderDisplay = connect(
  mapStateToProps,
  mapDispachToProps
)(ItemHolder)

export default ItemHolderDisplay
