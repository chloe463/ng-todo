import { Component, OnInit } from '@angular/core';
import { Todo } from './entities/todo';

import { switchMapTo } from 'rxjs/operators';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text: string;

  todos: Todo[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getTodos().subscribe(v => this.todos = v);
  }

  addTodo(event) {
    const todo = new Todo(event);
    this.api.addTodo(todo).pipe(
      switchMapTo(this.api.getTodos())
    ).subscribe(
      v => this.todos = v
    );
  }
}
