import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todosReducer, todosSliceName } from '@/modules/todos/models/todosSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [todosSliceName],
  blacklist: [],
};

const rootReducer = combineReducers({
  [todosSliceName]: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
