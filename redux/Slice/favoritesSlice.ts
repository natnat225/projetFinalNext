import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as Game[],
  reducers: {
    addFavorite: (state, action: PayloadAction<Game>) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      return state.filter(game => game.id !== action.payload);
    },
  },
});

export const { addFavorite , removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
