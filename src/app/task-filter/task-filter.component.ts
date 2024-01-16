import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {

  filter: string = ''

  @Output() taskFilter = new EventEmitter<string>();

  filterTasks() {
    this.taskFilter.emit(this.filter);
  }
}
