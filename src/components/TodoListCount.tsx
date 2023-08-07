import { todoListStore } from '@/store/store';
import React, { useSyncExternalStore } from 'react';

const TodoListCount = () => {
  console.log('🚀 Count rendered');
  const todoList = useSyncExternalStore(
    todoListStore.subscribe,
    todoListStore.getSnapshot,
  );
  return (
    <div className='block font-bold oldstyle-nums text-primary'>
      {todoList.length}
    </div>
  );
};

export default TodoListCount;
