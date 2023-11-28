import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Movie } from '../interfaces';

const initialState: Movie[] = [];

interface FavoritesState {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
}

export const useFavoritesStore = create(
  persist<FavoritesState>(
    (set) => ({
      favorites: initialState,
      toggleFavorite: (movie: Movie) =>
        set((state: { favorites: Movie[] }) => {
          const index = state.favorites.findIndex((m) => m.id === movie.id);

          if (index === -1) {
            return { favorites: [...state.favorites, movie] };
          } else {
            return {
              favorites: state.favorites.filter((m) => m.id !== movie.id),
            };
          }
        }),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
