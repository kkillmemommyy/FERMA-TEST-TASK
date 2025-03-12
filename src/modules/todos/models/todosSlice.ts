import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddTaskPayload, InitialState } from './types';

const initialState: InitialState = {
  tasks: {},
  ids: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, { payload: { text } }: PayloadAction<AddTaskPayload>) => {
      const id = String(Date.now());
      state.tasks[id] = {
        id: id,
        text,
        status: 'IN_WORK',
        createdAt: id,
        updatedAt: null,
      };
      state.ids.push(id);
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const todosActions = todosSlice.actions;
export const todosSliceName = todosSlice.name;
