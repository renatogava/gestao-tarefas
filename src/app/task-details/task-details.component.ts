import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  task: any;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.task = this.taskService.getById(+id);
    }
  }

}
