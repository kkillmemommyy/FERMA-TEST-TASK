import { FormEvent, memo, useRef, useState } from 'react';
import cls from './TodoForm.module.css';
import { Cross } from '../../../../shared/ui/Icons/Cross';
import { useTypedDispatch } from '@/shared/lib/typedReduxHooks';
import { todosActions } from '../../models/todosSlice';

export const TodoForm = memo(() => {
  const [inputText, setInputText] = useState('');
  const dispatch = useTypedDispatch();
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(todosActions.addTask({ text: inputText.trim() }));
    setInputText('');
    inputRef.current?.focus();
  };

  const isSubmitBtnDisabled = inputText.trim() === '';

  return (
    <form onSubmit={onSubmit} className={cls.form}>
      <input
        ref={inputRef}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        autoFocus
        className={cls.input}
        placeholder='Создать задачу'
        type='text'
      />
      <button disabled={isSubmitBtnDisabled} className={cls.btn} type='submit'>
        <Cross />
      </button>
    </form>
  );
});
