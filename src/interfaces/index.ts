export interface Movie {
  id: number;
  title: string;
  genres: string;
  cover: string;
  createdAt: string;
  description: string;
  studio: string;
  price: number;
}

export interface CartItem {
  movie: Movie;
  quantity: number;
}
