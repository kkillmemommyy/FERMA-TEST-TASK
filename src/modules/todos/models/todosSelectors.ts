import { createSelector } from '@reduxjs/toolkit';
import { Filter } from './types';

export const seletTodoIdsByFilter = (filter: Filter) => (state: AppState) => {
  if (filter === 'ALL') {
    return state.todos.ids;
  }

  return state.todos.ids.filter((id) => state.todos.tasks[id]?.status === filter);
};

export const selectTodoById = (id: string) =>
  createSelector(
    (state: AppState) => state.todos.tasks,
    (tasks) => tasks[id]
  );
