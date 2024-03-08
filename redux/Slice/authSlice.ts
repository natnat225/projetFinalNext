import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  loggedIn: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state: AuthState, action: PayloadAction<void>) => {
      state.loggedIn = true;
    },
    logOut: (state: AuthState, action: PayloadAction<void>) => {
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;