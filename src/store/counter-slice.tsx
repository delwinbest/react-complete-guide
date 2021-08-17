import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
  showCounter: boolean;
}

const initialCounterState: CounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
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

// Action creators are generated for each case reducer function
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
