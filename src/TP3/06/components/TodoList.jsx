import { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const tasks = [
      'Estudar React',
      'Fazer compras',
      'Malhar',
      'Ver Naruto Classico pela 2° vez'
    ];

    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <ul>
          {tasks.map((task, index) => (
            <TodoItem key={index} task={task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;