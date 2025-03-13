import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddTaskPayload, DeleteTaskPayload, InitialState, ToggleTaskStatusPayload, UpdateTaskPayload } from './types';

const initialState: InitialState = {
  tasks: {},
  ids: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, { payload: { text } }: PayloadAction<AddTaskPayload>) => {
      const createdAt = String(Date.now());
      state.tasks[createdAt] = {
        id: createdAt,
        text,
        status: 'IN_WORK',
        createdAt: createdAt,
        updatedAt: createdAt,
      };
      state.ids.push(createdAt);
    },
    deleteTask: (state, { payload: { id } }: PayloadAction<DeleteTaskPayload>) => {
      delete state.tasks[id];
      state.ids = state.ids.filter((currentId) => currentId !== id);
    },
    updateTask: ({ tasks }, { payload: { id, text } }: PayloadAction<UpdateTaskPayload>) => {
      const task = tasks[id];
      task.updatedAt = String(Date.now());
      task.text = text;
    },
    toggleTaskStatus: ({ tasks }, { payload: { id } }: PayloadAction<ToggleTaskStatusPayload>) => {
      const task = tasks[id];
      task.updatedAt = String(Date.now());
      task.status = task.status === 'COMPLETED' ? 'IN_WORK' : 'COMPLETED';
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const todosActions = todosSlice.actions;
export const todosSliceName = todosSlice.name;
