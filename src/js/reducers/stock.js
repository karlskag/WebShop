const adjustQuantityForID = (type, stock, productId) => {
  switch(type) {
    case 'ADD_TO_CART':
      return Object.assign({}, stock.quantity, {
        [productId]: stock.quantity[productId] - 1
      })
    case 'REMOVE_FROM_CART':
    default:
      return state
  }
}

const stock = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
        quantity: adjustQuantityForID(action.type, state, action.productId)
      })
    default:
      return state
  }
  return state
}

export default stock
