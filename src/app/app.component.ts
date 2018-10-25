import { Component, OnInit } from '@angular/core';
import { Todo } from './entities/todo';

import { Observable } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text: string;

  todos$: Observable<Todo[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.todos$ = this.api.getTodos();
  }

  addTodo(event) {
    const todo = new Todo(event);
    this.todos$ = this.api.addTodo(todo).pipe(
      switchMapTo(this.api.getTodos())
    );
  }
}
