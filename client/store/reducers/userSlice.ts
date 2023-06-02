import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Milestone {
  _id: string;
  title: string;
  description: string;
  status: string;
  deadline: string;
  owner: string;
  // Add any other properties of the Milestone object
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  milestones: Milestone[];
}

interface User {
  email: string;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  milestones: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    updateMilestones: (state, action: PayloadAction<Milestone[]>) => {
      state.milestones = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, logout, updateMilestones } = userSlice.actions;
export default userSlice.reducer;
