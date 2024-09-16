import "./TodoItemC.css"
import { useState } from 'react';

const TodoItem = ({ task }) => {
  const [isComplete, setIsComplete] = useState(false);

  const ident_Complete = () => {
    setIsComplete(true);
  };

  return (
    <li className={`todo-item ${isComplete ? 'completed' : ''}`}>
      {task}
      {!isComplete && (
        <button className="complete-button" onClick={ident_Complete}>
          Concluir
        </button>
      )}
    </li>
  );
};

export default TodoItem;