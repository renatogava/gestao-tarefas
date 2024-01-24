import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService) { }

  task?: Task;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id === null)
      this.navigateBack();

    this.task = this.taskService.getById(+id!);

    if (this.task === undefined)
      this.navigateBack();
  }

  updateTask() {
    this.taskService.saveToLocalStorage();

    this.navigateBack();
  }

  cancel() {
    this.navigateBack();
  }

  private navigateBack(): void {
    this.router.navigate(['/tasklist'], { relativeTo: this.route });
  }
  
}
