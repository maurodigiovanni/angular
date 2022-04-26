import { Component, Input, OnInit } from '@angular/core';
import { TaskTypeObj } from '@model/taskTypeObj';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'pm-task-type-table',
  templateUrl: './task-type-table.component.html',
  styleUrls: ['./task-type-table.component.css'],
})
export class TaskTypeTableComponent implements OnInit {
  @Input() listTaskTypes: TaskTypeObj[] = [];

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Task List');
  }
}
