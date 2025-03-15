import cls from './Todo.module.css';
import { useTypedDispatch, useTypedSelector } from '@/shared/lib/typedReduxHooks';
import { selectTodoById } from '../../models/todosSelectors';
import { getFormattedDate } from '@/shared/lib/formatters';
import { Button } from '@/shared/ui/Button/Button';
import { todosActions } from '../../models/todosSlice';
import { memo, useState, useRef, FocusEvent } from 'react';
import clsx from 'clsx';

interface TodoProps {
  id: string;
}

export const Todo = memo(({ id }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');

  const saveBtnRef = useRef<HTMLButtonElement>(null);
  const editBtnRef = useRef<HTMLButtonElement>(null);

  const todo = useTypedSelector(selectTodoById(id));
  const dispatch = useTypedDispatch();

  const { text, createdAt, status } = todo;
  const isCompleted = status === 'COMPLETED';

  const toggleEdit = () => {
    setEditText(text);
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    const isValid = editText.trim() !== '' && editText.trim() !== text;
    if (isValid) {
      dispatch(todosActions.updateTask({ id, text: editText.trim() }));
    }
    setIsEditing(false);
  };

  const onBlure = (e: FocusEvent<HTMLInputElement, Element>) => {
    const relatedTarget = e.relatedTarget;
    if (relatedTarget === saveBtnRef.current || relatedTarget === editBtnRef.current) {
      return;
    }
    setIsEditing(false);
  };

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
        {isEditing ? (
          <input
            onBlur={onBlure}
            className={cls.input}
            type='text'
            value={editText}
            autoFocus
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') setIsEditing(false);
            }}
          />
        ) : (
          <span className={clsx({ [cls.completed]: isCompleted }, cls.text)}>{text}</span>
        )}
      </label>
      <div className={cls.btns}>
        {isEditing && (
          <Button
            ref={saveBtnRef}
            onTouchStart={(e) => {
              e.preventDefault();
              handleSave();
            }}
            onClick={handleSave}
            theme='none'
            extraClasses={cls.saveBtn}
          >
            Сохранить
          </Button>
        )}
        <Button ref={editBtnRef} theme='edit' onClick={toggleEdit} isActive={isEditing} />
        <Button theme='delete' onClick={() => dispatch(todosActions.deleteTask({ id }))} />
      </div>
    </li>
  );
});
