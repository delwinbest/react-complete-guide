import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterSliceReducer from './counter-slice';
import authSliceReducer from './auth-slice';

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
