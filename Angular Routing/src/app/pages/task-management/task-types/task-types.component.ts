import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskTypeObj, TaskTypeResolved } from '@model/TaskTypeObj';
import { TaskTypesService } from 'src/app/shared/service/taskTypes.service';

@Component({
  selector: 'pm-task-types',
  templateUrl: './task-types.component.html',
  styleUrls: ['./task-types.component.css'],
})
export class TaskTypesComponent implements OnInit {
  displayMode: DisplayModeEnum = DisplayModeEnum.Card;
  displayModeEnum = DisplayModeEnum;
  listTaskTypes: TaskTypeObj[];
  allTaskTypes: TaskTypeObj[];
  errorMessage?: string;
  task?: TaskTypeObj;
  sub: Subscription;
  pageTitle = 'Task Types';
  page = 1;
  pageSize = 8;
  collectionSize = 0;
  closeResult = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskTypesService
  ) {}

  ngOnInit(): void {
    this.displayMode = DisplayModeEnum.Card;
    this.getListTasks();
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.getProduct(id);
  }

  getListTasksResolved() {
    let resolvedData: TaskTypeResolved =
      this.route.snapshot.data['resolvedTaskTypes'];
    //console.log(resolvedData);
    this.collectionSize = resolvedData['taskTypes'].length;
    console.log(this.collectionSize);
    this.allTaskTypes = resolvedData['taskTypes'];
    this.listTaskTypes = resolvedData['taskTypes']
      .map((tasks: TaskTypeObj) => ({ ...tasks }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  getListTasks() {
    console.log(this.listTaskTypes);

    this.sub = this.service.getTaskTypesList().subscribe(
      (response: TaskTypeObj[]) => {
        //console.log(response.taskTypes);
        this.collectionSize = response['taskTypes'].length;

        this.allTaskTypes = response['taskTypes'];
        this.listTaskTypes = (response as any).taskTypes
          .map((tasks: TaskTypeObj) => ({ ...tasks }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        // console.log(this.listTaskTypes);
      },
      (error: any) => console.log(error),
      () => console.log('all Task Types retrivered')
    );
  }

  refreshTasks() {
    // console.log(this.allTaskTypes);
    const list = this.allTaskTypes
      .map((tasks: TaskTypeObj, i) => ({ id: i + 1, ...tasks }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );

    this.listTaskTypes = list as any;
    //console.log(this.listTaskTypes);
  }
  displayTaskDetails() {
    // this.router.navigate([{ outlets: { popup: ['details'] } }]);
    this.router.navigate([{ outlets: { popup: ['details'] } }]);
  }
  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }
}

enum DisplayModeEnum {
  Card = 0,
  Table = 1,
  Map = 2,
}
