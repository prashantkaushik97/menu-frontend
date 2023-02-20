export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY';
export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = _id => ({
  type: REMOVE_ITEM,
  payload: _id
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});
export const incrementQuantity = (_id, newQuantity) => ({
  type: INCREMENT_ITEM_QUANTITY,
  payload: {
    _id,
    newQuantity
  }
});


export const decrementQuantity = (_id, newQuantity) => ({
  type: DECREMENT_ITEM_QUANTITY,
  payload: {
    _id,
    newQuantity
  }
});
