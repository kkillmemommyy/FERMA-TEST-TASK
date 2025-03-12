import { TodoForm } from '../TodoForm/TodoForm';
import cls from './Todos.module.css';

export const Todos = () => {
  return (
    <main className={cls.todos}>
      <h1 className={cls.title}>Список дел</h1>
      <TodoForm extraClasses={cls.inputMarginBottom} />
    </main>
  );
};
