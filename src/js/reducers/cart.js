const addProductIDToCart = (type, cart, productId) => {
  switch (type) {
    case 'ADD_TO_CART':
      if (cart.items.indexOf(productId) !== -1) return cart.items
      return [
        ...cart.items,
        productId
      ]
    case 'REMOVE_FROM_CART':
      return cart.items.filter((i) => i !== productId)
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
    default:
      return state
  }
}

const cart = (state = { items: [], quantity: {} }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
        items: addProductIDToCart(action.type, state, action.productId),
        quantity: adjustQuantityForID(action.type, state, action.productId)
      })
    default:
      return state
  }
}

export default cart
