export class Todo {
  public task: string;
  public finished: boolean;

  constructor(task: string, finished?: boolean) {
    this.task = task;
    this.finished = finished ? finished : false;
  }
}
