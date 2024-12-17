import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
    items: [], // Cart items should be an array
    totalPrice: 0,
    totalQuantity: 0,
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      setCart: (state, action) => {
        state.items = action.payload.items || []; // Set cart items from payload
        state.totalPrice = action.payload.totalPrice || 0;
        state.totalQuantity = action.payload.totalQuantity || 0;
      },
      addToCart: (state, action) => {
        const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.items[itemIndex].quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      },
      removeFromCart: (state, action) => {
        const updatedCart = state.items.filter((item) => item.id !== action.payload.id);
        state.items = updatedCart;
      },
      clearCart: (state) => {
        state.items = [];
        state.totalPrice = 0;
        state.totalQuantity = 0;
      },
      incrementQuantity: (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity += 1;
        }
      },
      
      decrementQuantity: (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
    },
  });
  
  
export const { setCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
