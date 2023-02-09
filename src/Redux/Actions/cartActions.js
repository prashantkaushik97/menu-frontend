export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY';
export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  payload: itemId
});


export const incrementQuantity = (itemId, newQuantity) => ({
  type: INCREMENT_ITEM_QUANTITY,
  payload: {
    itemId,
    newQuantity
  }
});


export const decrementQuantity = (itemId, newQuantity) => ({
  type: DECREMENT_ITEM_QUANTITY,
  payload: {
    itemId,
    newQuantity
  }
});
