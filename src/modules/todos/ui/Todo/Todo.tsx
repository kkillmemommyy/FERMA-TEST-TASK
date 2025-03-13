import cls from './Todo.module.css';
import { useTypedDispatch, useTypedSelector } from '@/shared/lib/typedReduxHooks';
import { selectTodoById } from '../../models/todosSelectors';
import { getFormattedDate } from '@/shared/lib/formatters';
import { Button } from '@/shared/ui/Button/Button';
import { todosActions } from '../../models/todosSlice';
import { memo, useState } from 'react';
import clsx from 'clsx';

interface TodoProps {
  id: string;
}

export const Todo = memo(({ id }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const todo = useTypedSelector(selectTodoById(id));
  const dispatch = useTypedDispatch();

  const { text, createdAt, status } = todo;
  const isCompleted = status === 'COMPLETED';

  return (
    <li className={cls.todo}>
      <h2 className={cls.date}>{getFormattedDate(createdAt)}</h2>
      <label className={cls.checkbox}>
        <input
          className={cls.checkbox__input}
          type='checkbox'
          checked={isCompleted}
          onChange={() => dispatch(todosActions.toggleTaskStatus({ id }))}
        />
        <span className={cls.checkbox__mark}></span>
        <span className={clsx({ [cls.completed]: isCompleted }, cls.text)}>{text}</span>
      </label>
      <div className={cls.btns}>
        <Button theme='edit' />
        <Button theme='delete' onClick={() => dispatch(todosActions.deleteTask({ id }))} />
      </div>
    </li>
  );
});

