import Console from './components/Console';
import Input from './components/Input';
import TodoListCount from './components/TodoListCount';
import TodoListView from './components/TodoListView';

function App() {
  console.log('🚀 App rendered');
  return (
    <div>
      <Input />
      <TodoListView />
      <TodoListCount />
      <Console />
    </div>
  );
}

export default App;
