import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Array<Task> = [];

  getTasks(): Array<Task> {

    this.tasks = this.getFromLocalStorage();

    return this.tasks;
  }

  getById(id: number): Task | undefined {

    const taskFound = this.tasks.find(c => c.id == id);

    return taskFound;
  }

  addTask(task: Task): void {

    task.id = this.tasks.length + 1;

    this.tasks.push(task);

    this.saveToLocalStorage();
  }

  removeTask(task: Task): void {
    const index: number = this.tasks.indexOf(task);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }

    this.saveToLocalStorage();
  }

  public saveToLocalStorage() {
    const tasksjson = JSON.stringify(this.tasks);

    localStorage.setItem('tasks', tasksjson);
  }

  private getFromLocalStorage(): Array<Task> {
    const tasksjson = localStorage.getItem('tasks');

    if (!tasksjson)
      return new Array<Task>();

    return JSON.parse(tasksjson);
  }
}