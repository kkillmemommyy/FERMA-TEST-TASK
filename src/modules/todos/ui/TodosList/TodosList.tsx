import { useTypedSelector } from '@/shared/lib/typedReduxHooks';
import { Filter } from '../../models/types';
import cls from './TodosList.module.css';
import { seletTodoIdsByFilter } from '../../models/todosSelectors';
import { Todo } from '../Todo/Todo';

interface TodoListProps {
  filter?: Filter;
}

export const TodosList = ({ filter = 'ALL' }: TodoListProps) => {
  const todoIds = useTypedSelector(seletTodoIdsByFilter(filter));

  return (
    <ul className={cls.list}>
      {todoIds.map((id) => (
        <Todo key={id} id={id} />
      ))}
    </ul>
  );
};
