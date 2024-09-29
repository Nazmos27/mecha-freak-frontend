import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { toast } from "sonner";

export type TCartItem = {
  productId: string;
  image: string;
  productTitle: string;
  brand: string;
  quantity: number;
  price: number;
  subTotal: number;
};

export type TCartState = {
  items: TCartItem[];
  totalPrice: number;
  totalQuantity: number;
};

const initialState: TCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId
      );

      if (existingItem) {
        // If item already exists in cart, increase quantity and update subtotal
        existingItem.quantity += newItem.quantity;
        existingItem.subTotal += newItem.subTotal;
      } else {
        // If item does not exist in cart, add it to the cart items array
        state.items.push(newItem);
      }

      // Update total price and quantity in the cart
      state.totalPrice += newItem.subTotal;
      state.totalQuantity += newItem.quantity;
    },
    deleteProductFromCart: (state, action) => {
      const deleteItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === deleteItem
      );

      if (existingItem) {
        // If item already exists in cart, decrease subtotal and totalQuantity
        state.totalPrice = state.totalPrice - existingItem.subTotal;
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      // Update cart items
      state.items = state.items.filter((item) => item.productId !== deleteItem);
    },
    decreaseQuantityFromCart: (state, action) => {
      const deleteItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === deleteItem
      );

      if (existingItem) {
        if (existingItem.quantity > 0) {
          existingItem.quantity = existingItem.quantity - 1;
          existingItem.subTotal = existingItem.subTotal - existingItem.price;
          state.totalPrice = state.totalPrice - existingItem.price;
          state.totalQuantity = state.totalQuantity - 1;
        } else {
          toast.error("Quantity is already 0");
        }
      }
    },
    increaseQuantityToCart: (state, action) => {
      const deleteItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === deleteItem
      );

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.subTotal = existingItem.subTotal + existingItem.price;
        state.totalPrice = state.totalPrice + existingItem.price;
        state.totalQuantity = state.totalQuantity + 1;
      }
    },
    emptyCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  deleteProductFromCart,
  increaseQuantityToCart,
  decreaseQuantityFromCart,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const totalCartItems = (state: RootState) => state.cart.items.length;
export const cart = (state: RootState) => state.cart;
