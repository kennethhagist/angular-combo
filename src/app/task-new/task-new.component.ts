import { Task } from './../task';
import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskNewComponent implements OnInit {
  newTask: Task = new Task();

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

  onSumbit(task: Task) {
    this._taskService.createTask(this.newTask);
    this.newTask = new Task();
  }

}