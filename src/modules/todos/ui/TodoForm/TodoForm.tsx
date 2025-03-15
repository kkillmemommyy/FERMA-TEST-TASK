import { FormEvent, useState } from 'react';
import cls from './TodoForm.module.css';
import { Cross } from '../../../../shared/ui/Icons/Cross';
import { useTypedDispatch } from '@/shared/lib/typedReduxHooks';
import { todosActions } from '../../models/todosSlice';

export const TodoForm = () => {
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useTypedDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText === '') {
      return;
    }

    dispatch(todosActions.addTask({ text: inputText }));
    setInputText('');
  };

  return (
    <form onSubmit={onSubmit} className={cls.form}>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className={cls.input}
        placeholder='Создать задачу'
        type='text'
      />
      <button disabled={inputText === ''} className={cls.btn} type='submit'>
        <Cross />
      </button>
    </form>
  );
};
