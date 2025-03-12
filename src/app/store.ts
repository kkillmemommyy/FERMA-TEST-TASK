import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todosReducer, todosSliceName } from '@/modules/todos/models/todosSlice';

const rootReducer = combineReducers({
  [todosSliceName]: todosReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
