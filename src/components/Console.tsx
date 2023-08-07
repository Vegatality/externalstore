import { todoListStore } from '@/store/store';
import { useEffect } from 'react';

const Console = () => {
  /**
   * No render
   */
  console.log('🚀 Console rendered');
  useEffect(() => {
    const unsub = todoListStore.subscribe(() => {
      const toDolist = todoListStore.getSnapshot();
      console.log(`🚀 toDoList count: ${toDolist.length}`);
    });

    return () => unsub();
  }, []);
  return <>See console</>;
};

export default Console;
