import { useState } from 'react';
import "./TodoItemC.css";

const TodoItem = ({ task, onTaskDelete }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleDelete = () => {
    onTaskDelete(task);
  };

  return (
    <li className={`todo-item ${isComplete ? 'completed' : ''}`}>
      {task}
      {!isComplete && (
        <button className="complete-button" onClick={handleComplete}>
          Concluir
        </button>
      )}
      <button className="delete-button" onClick={handleDelete}>
        Excluir
      </button>
    </li>
  );
};

export default TodoItem;
