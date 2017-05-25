import { combineReducers } from 'redux'
import cart from './cart'
import details from './details'
import products from './products'

const webShop = combineReducers({
  cart,
  products
})

export default webShop;
