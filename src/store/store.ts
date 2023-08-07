let nextId = 0;

/**
 * external store state
 */
let todos = [{ id: nextId++, text: 'Todo #1' }];

/**
 * callback function Array which can notify change of the store state.
 */
type Tfunction = () => void;
let listeners: Tfunction[] = [];
const emitChange = () => {
  for (const listener of listeners) {
    listener();
  }
};
/**
 * 😲 closers chaining...
 */
export const todoListStore = {
  /**
   * @param listener Functions to run when the state changes (=== subscribe callback function)
   * @returns returns `unsubscribe` function. Unsubscribe function helps components to have independent subscription.
   * @example
   * ```ts
   * 
   * useEffect(() => {
      const unsub = todoListStore.subscribe(() => {
        const toDolist = todoListStore.getSnapshot();
        console.log(`🚀 toDoList count: ${toDolist.length}`);
      });

      return () => unsub();
    }, []);
    
   * ```
   */
  subscribe(listener: Tfunction) {
    listeners = [...listeners, listener];

    /**
     * unsubscribe function helps components to perform independent subscription.
     */
    return () => {
      listeners = listeners.filter(lis => lis !== listener);
    };
  },

  getSnapshot() {
    return todos;
  },

  addTodo(text: string) {
    todos = [...todos, { id: nextId++, text }];
    emitChange();
  },
};
