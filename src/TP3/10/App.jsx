import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const ident_AddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div>
      <TodoList
        tasks={tasks}
        newTask={newTask}
        setNewTask={setNewTask}
        ident_AddTask={ident_AddTask}
        setTasks={setTasks} 
      />
    </div>
  );
}

export default App;
