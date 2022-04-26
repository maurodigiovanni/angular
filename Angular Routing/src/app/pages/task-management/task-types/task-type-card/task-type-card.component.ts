import { Component, Input, OnInit } from '@angular/core';
import { TaskTypeObj } from '@model/taskTypeObj';

@Component({
  selector: 'pm-task-type-card',
  templateUrl: './task-type-card.component.html',
  styleUrls: ['./task-type-card.component.css'],
})
export class TaskTypeCardComponent implements OnInit {
  @Input() listTaskTypes: TaskTypeObj[] = [];

  constructor() {}

  ngOnInit(): void {}
}
