const adjustQuantityForID = (type, stock, productId, numberRemoved = 0) => {
  switch(type) {
    case 'ADD_TO_CART':
      return Object.assign({}, stock.quantity, {
        [productId]: stock.quantity[productId] - 1
      })
    case 'REMOVE_FROM_CART':
      return Object.assign({}, stock.quantity, {
        [productId]: numberRemoved
      })
    case 'DECREMENT_QUANTITY_IN_CART':
      return Object.assign({}, stock.quantity, {
        [productId]: stock.quantity[productId] + 1
      })
    default:
      return state
  }
}

const stock = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    case 'DECREMENT_QUANTITY_IN_CART':
      return Object.assign({}, state, {
        quantity: adjustQuantityForID(action.type, state, action.productId)
      })
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
        quantity: adjustQuantityForID(action.type, state, action.productId, action.quantity)
      })
    default:
      return state
  }
  return state
}

export default stock
