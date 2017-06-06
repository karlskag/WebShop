import { combineReducers } from 'redux'
import cart from './cart'
import details from './details'
import stock from './stock'

const webShop = combineReducers({
  cart,
  stock
})

export default webShop;
