//Hur ska statet se ut??
/*
state = {
  cart: {
    items: [1,2,3]
    quantity: {
      1: 2,
      2: 1,
      3: 1
    }
  },
  stock: {
    products: [
        1 : {
        id: 1,
        price: 299,
        name: 'Nike Air',
        desc: 'These shoes are fly fo sho'
      },
      ...
    ]
    quantity: {
      1: 4,
      2: 3,
      3: 2
    }
  }
}
*/


const itemChange = (type, cart, productId) => {
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

const cart = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
        cart: itemsChange(action.type, state.cart, action.productId)
      })
    default:
      return state
  }
}

export default cart
