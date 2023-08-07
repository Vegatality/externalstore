import { todoListStore } from '@/store/store';
import React, { useSyncExternalStore } from 'react';

const TodoListView = () => {
  console.log('🚀 View rendered');
  /**
   * @description external store state => trigger rendering every seconds whenever changes are made to the list(external store state).
   */
  const todoList = useSyncExternalStore(
    todoListStore.subscribe,
    todoListStore.getSnapshot,
  );
  return (
    <ul className='list-inside list-decimal pl-5'>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoListView;
