import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(private taskService: TaskService) { }

  tasks: Array<Task> = [];

  newTask = new Task();

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {

    this.taskService.addTask(this.newTask);

    this.newTask = new Task();
  }

  removeTask(task: Task) {

    this.taskService.removeTask(task);
  }

  updateTask() {

    this.taskService.saveToLocalStorage();
  }

  filterTasks(filter: string) {

    if (filter !== '')
      this.tasks = this.tasks.filter(c => c.name?.includes(filter))
    else
      this.tasks = this.taskService.getTasks();
  }
}