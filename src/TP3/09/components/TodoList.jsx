import TodoItem from './TodoItem';
import PropTypes from "prop-types"

const TodoList = ({ tasks, newTask, setNewTask, ident_AddTask }) => {
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
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

TodoList.prototype = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  newTask: PropTypes.string.isRequired,
}
export default TodoList;
