import { Button } from '@/shared/ui/Button/Button';
import { TodoForm } from '../TodoForm/TodoForm';
import cls from './Todos.module.css';
import { TodosList } from '../TodosList/TodosList';
import { memo, useState } from 'react';
import { Filter } from '../../models/types';

interface TodoFiltersProps {
  filter: Filter;
  changeFilter: (filter: Filter) => void;
}

const TodoFilters = memo(({ filter, changeFilter }: TodoFiltersProps) => {
  return (
    <div className={cls.filters}>
      <Button theme='black' isActive={filter === 'ALL'} onClick={() => changeFilter('ALL')}>
        Все
      </Button>
      <Button theme='green' isActive={filter === 'COMPLETED'} onClick={() => changeFilter('COMPLETED')}>
        Выполнено
      </Button>
      <Button theme='red' isActive={filter === 'IN_WORK'} onClick={() => changeFilter('IN_WORK')}>
        Не выполнено
      </Button>
    </div>
  );
});

export const Todos = () => {
  const [filter, setFilter] = useState<Filter>('ALL');

  return (
    <main className={cls.todos}>
      <h1 className={cls.title}>Список дел</h1>
      <TodoForm />
      <TodoFilters filter={filter} changeFilter={setFilter} />
      <TodosList filter={filter} />
    </main>
  );
};
