import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { CartItem, Movie } from '../interfaces';

const initialState: CartItem[] = [];

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: { payload: Movie }) => {
      const index = state.findIndex((item) => item.movie.id === payload.id);

      if (index === -1) {
        state.push({ movie: payload, quantity: 1 });
      } else {
        state[index].quantity += 1;
      }
    },
    removeFromCart: (state, { payload }: { payload: Movie }) => {
      const index = state.findIndex((item) => item.movie.id === payload.id);

      if (index !== -1) {
        if (state[index].quantity === 1) {
          state.splice(index, 1);
        } else {
          state[index].quantity -= 1;
        }
      }
    },
    deleteFromCart: (state, { payload }: { payload: Movie }) => {
      const index = state.findIndex((item) => item.movie.id === payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCart: () => initialState,
  },
});

export const { addToCart, clearCart, deleteFromCart, removeFromCart } =
  cart.actions;

export const getCart = () => (state: RootState) => state.cart;

export const getTotal = () => (state: RootState) =>
  state.cart.reduce((acc, item) => acc + item.quantity, 0);

export default cart.reducer;
