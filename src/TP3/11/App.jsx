
import { useState } from 'react';
import TodoList from './components/TodoList';
import "./components/TodoItemC.css"

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const ident_AddTask = () => {
    const taskObject = { text: newTask, completed: false };
    setTasks([...tasks, taskObject]);
    setNewTask('');
  };

  return (
    <div className="container">
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
