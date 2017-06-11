export const addToCart = (productId) => {
  return {
    type: 'ADD_TO_CART',
    productId
  }
}

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    productId,
    quantity
  }
}

export const decrementQuantityInCart = (productId) => {
  return {
    type: 'DECREMENT_QUANTITY_IN_CART',
    productId
  }
}

export const showCart = (shouldShow) => {
  return {
    type: 'SHOW_CART',
    shouldShow
  }
}

export const showDetails = (shouldShow, productId) => {
  return {
    type: 'SHOW_DETAILS',
    shouldShow,
    productId
  }
}
