import { combineReducers } from '@reduxjs/toolkit';
import userReducer, { UserState } from './reducers/userSlice';

export interface RootState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
