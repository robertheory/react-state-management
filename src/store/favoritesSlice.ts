import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Movie } from '../interfaces';

const initialState: Movie[] = [];

export const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }: { payload: Movie }) => {
      const index = state.findIndex((movie) => movie.id === payload.id);

      if (index === -1) {
        state.push(payload);
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favorites.actions;

export const getFavorites = () => (state: RootState) => state.favorites;

export default favorites.reducer;
