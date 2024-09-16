import TodoItem from './TodoItem';

const TodoList = ({ tasks, newTask, setNewTask, ident_AddTask, setTasks }) => {
  const handleTaskDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={ident_AddTask}>Adicionar</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onTaskDelete={handleTaskDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
