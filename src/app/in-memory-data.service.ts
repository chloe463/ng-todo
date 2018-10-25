import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './entities/todo';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      new Todo('todo1'),
      new Todo('todo2'),
      new Todo('todo3'),
      // { task: 'todo1', finished: false },
      // { task: 'todo2', finished: false },
      // { task: 'todo3', finished: false }
    ];
    return { todos };
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}
