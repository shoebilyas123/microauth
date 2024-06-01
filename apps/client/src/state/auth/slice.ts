import { createSlice } from '@reduxjs/toolkit';

interface User {
  username: string;
  email: string;
  profilePic: string;
  accessToken?: string;
}

interface AuthInfo {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthInfo = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
