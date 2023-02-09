import { ADD_ITEM, DECREMENT_ITEM_QUANTITY, INCREMENT_ITEM_QUANTITY, REMOVE_ITEM } from "../Actions/cartActions";

const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_ITEM:
              return {
                ...state,
                items: state.items.filter(item => item.itemId !== action.payload)
            };
        case INCREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.itemId === action.payload.itemId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        case DECREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.itemId === action.payload.itemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };
        default:
            return state;
    }
};

export default cartReducer;