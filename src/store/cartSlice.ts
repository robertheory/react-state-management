import { create } from 'zustand';
import { CartItem, Movie } from '../interfaces';

const initialState: CartItem[] = [];

interface CartState {
  cart: CartItem[];
  addToCart: (movie: Movie) => void;
  removeFromCart: (movie: Movie) => void;
  deleteFromCart: (movie: Movie) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: initialState,
  addToCart: (movie: Movie) =>
    set((state: { cart: CartItem[] }) => {
      const index = state.cart.findIndex((m) => m.movie.id === movie.id);

      if (index === -1) {
        return { cart: [...state.cart, { movie, quantity: 1 }] };
      } else {
        state.cart[index].quantity += 1;
        return { cart: state.cart };
      }
    }),
  removeFromCart: (movie: Movie) =>
    set((state: { cart: CartItem[] }) => {
      const index = state.cart.findIndex((m) => m.movie.id === movie.id);

      if (index !== -1) {
        if (state.cart[index].quantity === 1) {
          state.cart.splice(index, 1);
        } else {
          state.cart[index].quantity -= 1;
        }
      }

      return { cart: state.cart };
    }),
  deleteFromCart: (movie: Movie) =>
    set((state: { cart: CartItem[] }) => {
      const index = state.cart.findIndex((m) => m.movie.id === movie.id);

      if (index !== -1) {
        state.cart.splice(index, 1);
      }

      return { cart: state.cart };
    }),
}));
