export type TodoStatus = 'COMPLETED' | 'IN_WORK';

export type Filter = 'ALL' | 'COMPLETED' | 'IN_WORK';

export interface Task {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  status: TodoStatus;
}

export interface InitialState {
  tasks: Record<string, Task>;
  ids: string[];
}

export interface AddTaskPayload {
  text: string;
}

export interface DeleteTaskPayload {
  id: string;
}

export interface UpdateTaskPayload {
  id: string;
  text: string
}

export interface ToggleTaskStatusPayload {
  id: string;
}