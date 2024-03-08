// store.ts
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './Slice/favoritesSlice';
import usersReducer from './Slice/userSlice';
import authReducer from './Slice/authSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    users: usersReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;