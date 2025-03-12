type Status = 'COMPLETED' | 'IN_WORK';

export interface Task {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string | null;
  status: Status;
}

export interface InitialState {
  tasks: Record<string, Task>;
  ids: string[];
}

export interface AddTaskPayload {
  text: string;
}
