import { Component } from '@angular/core';
import { Todo } from './entities/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;

  todos: Todo[] = [
    { task: 'todo1', finished: false },
    { task: 'todo2', finished: false },
    { task: 'todo3', finished: false }
  ];

  addTodo(event) {
    this.todos = [...this.todos, { task: event, finished: false }];
  }
}
