import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../entities/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}


  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>('/api/todos', todo);
  }
}

