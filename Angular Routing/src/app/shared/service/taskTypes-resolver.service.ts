import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TaskTypeObj, TaskTypeResolved } from '../model/TaskTypeObj';
import { TaskTypesService } from './taskTypes.service';

@Injectable({
  providedIn: 'root',
})
export class TaskTypesResolverService implements Resolve<TaskTypeResolved> {
  constructor(private taskTypeService: TaskTypesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TaskTypeResolved> {
    //const id = +route.paramMap.get('id');

    // if (isNaN(+id)) {
    //   const message = `Product id was not a number: ${id}`;
    //   console.error(message);
    //   return of({ taskType: null, error: message });
    // }
    return this.taskTypeService
      .getTaskTypesList()
      .pipe(catchError((err) => of(err)));
  }
}
