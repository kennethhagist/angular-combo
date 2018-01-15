import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.tasksObserver.subscribe(
      tasks => this.tasks = tasks
    );
    this. _taskService.retrieveAll();
  }

}