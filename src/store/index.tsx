import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export interface CounterState {
  counter: number;
  showCounter: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
}

const initialCounterState: CounterState = { counter: 0, showCounter: true };
const initialAuthState: AuthState = { isAuthenticated: false };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: PayloadAction<any>) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

// Action creators are generated for each case reducer function
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
