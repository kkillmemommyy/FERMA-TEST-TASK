import { Button } from '@/shared/ui/Button/Button';
import { TodoForm } from '../TodoForm/TodoForm';
import cls from './Todos.module.css';
import { TodosList } from '../TodosList/TodosList';
import { useState } from 'react';
import { Filter } from '../../models/types';

export const Todos = () => {
  const [filter, setFilter] = useState<Filter>('ALL');

  return (
    <main className={cls.todos}>
      <h1 className={cls.title}>Список дел</h1>
      <TodoForm />
      <div className={cls.filters}>
        <Button theme='black' isActive={filter === 'ALL'} onClick={() => setFilter('ALL')}>
          Все
        </Button>
        <Button theme='green' isActive={filter === 'COMPLETED'} onClick={() => setFilter('COMPLETED')}>
          Выполнено
        </Button>
        <Button theme='red' isActive={filter === 'IN_WORK'} onClick={() => setFilter('IN_WORK')}>
          Не выполнено
        </Button>
      </div>
      <TodosList filter={filter} />
    </main>
  );
};
