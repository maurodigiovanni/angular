import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskTypeObj, TaskTypeResolved } from '@model/taskTypeObj';

@Component({
  selector: 'pm-task-type-details',
  templateUrl: './task-type-details.component.html',
  styleUrls: ['./task-type-details.component.css'],
})
export class TaskTypeDetailsComponent implements OnInit {
  id: string;
  closeResult = '';
  errorMessage?: string;
  task?: TaskTypeObj;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot.paramMap.get('id'));

    // this.service.getTaskById(this.id).subscribe(
    //   (response: TaskTypeObj) => {
    //     console.log(response);
    //     // console.log(this.listTaskTypes);
    //   },
    //   (error: any) => console.log(error),
    //   () => console.log('all Task Types retrivered')
    // );
    const resolvedData: TaskTypeResolved =
      this.route.snapshot.data['resolvedTaskTypes'];
    this.errorMessage = resolvedData.error;
    this.onTasketrieved(resolvedData.taskType);
  }

  ngOnInit(): void {}

  onTasketrieved(task: TaskTypeObj): void {
    this.task = task;
    console.log('-----------------------------------');
    console.log(task);
    // if (this.task) {
    //   this.pageTitle = `Task Detail: ${this.task.id}`;
    // } else {
    //   this.pageTitle = 'No product found';
    // }
  }

  //https://www.freakyjolly.com/ng-bootstrap-modals-tutorial-pass-data-from-parent-and-get-back-from-modals/
}
