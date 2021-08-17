import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';

export interface CounterState {
  counter: number;
  showCounter: Boolean;
}

const initialState: CounterState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

const store = configureStore({
  reducer: counterSlice.reducer,
});
// Action creators are generated for each case reducer function
export const counterActions = counterSlice.actions;

export default store;
