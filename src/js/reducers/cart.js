import { omit } from 'lodash';

const adjustProductInCart = (type, cart, productId) => {
  switch (type) {
    case 'ADD_TO_CART':
      if (cart.items.indexOf(productId) !== -1) return cart.items
      return [
        ...cart.items,
        productId
      ]
    case 'REMOVE_FROM_CART':
      return cart.items.filter((i) => i !== productId)
    case 'DECREMENT_QUANTITY_IN_CART':
      if (cart.quantity[productId] === 1) return cart.items.filter((i) => i !== productId)
      return cart.items
    default:
      return cart.items
  }
}

const adjustQuantityForID = (type, cart, productId) => {
  switch(type) {
    case 'ADD_TO_CART':
      const prevQuant = cart.quantity[productId];
      const newQuant = prevQuant ? prevQuant + 1 : 1;
      return Object.assign({}, cart.quantity, {
        [productId]: newQuant
      })
    case 'REMOVE_FROM_CART':
      return omit(cart.quantity, productId)
    case 'DECREMENT_QUANTITY_IN_CART':
      if (cart.quantity[productId] === 1) return omit(cart.quantity, productId)
      return Object.assign({}, cart.quantity, {
        [productId]: cart.quantity[productId] - 1
      })
    default:
      return cart.quantity
  }
}

const cart = (state = { items: [], quantity: {} }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    case 'REMOVE_FROM_CART':
    case 'DECREMENT_QUANTITY_IN_CART':
      let a = Object.assign({}, state, {
        items: adjustProductInCart(action.type, state, action.productId),
        quantity: adjustQuantityForID(action.type, state, action.productId)
      })
      return a;
    default:
      return state
  }
}

export default cart
