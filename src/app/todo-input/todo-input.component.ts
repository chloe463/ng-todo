import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  text: string;

  @Output()
  addTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.addTodo.emit(this.text);
  }
}
