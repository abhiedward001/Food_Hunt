import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addItem': {
            const existingCartItemIndex = state.items.findIndex(item => { return item.id === action.item.id });
            const existingCartItem = state.items[existingCartItemIndex];


            const updatedTotalAMount = state.totalAmount + (action.item.price * action.item.amount);


            let updatedItems;
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            else {
                updatedItems = state.items.concat(action.item)
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAMount
            };
        }
        case 'removeItem': {

            const existingCartItemIndex = state.items.findIndex(item => action.id === item.id );
            const existingItem = state.items[existingCartItemIndex];
            // console.log(existingItem.price);
            const updatedTotalAMount = state.totalAmount - existingItem.price;
            let updatedItems;


            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => { return item.id !== action.id });
            }
            else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount:updatedTotalAMount
            }
        }
        default :{
            return {
                items:state.items,
                totalAmount:state.totalAmount
            }
        }

    }
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (Item) => {
        dispatchCartAction({
            type: 'addItem',
            item: Item
        });
    };
    const removeItemToCartHandler = (Id) => {
        dispatchCartAction({
            type: 'removeItem',
            id: Id
        });
    };

    const cartContext =
    {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;