import { ADD_ITEM, DECREMENT_ITEM_QUANTITY, EMPTY_CART, INCREMENT_ITEM_QUANTITY, REMOVE_ITEM } from "../Actions/cartActions";

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
                items: state.items.filter(item => item._id !== action.payload)
            };
        case INCREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item._id === action.payload._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        case DECREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item._id === action.payload._id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };
            case EMPTY_CART:
                return {
                    ...state,
                    items: []
                };
        default:
            return state;
    }
};

export default cartReducer;