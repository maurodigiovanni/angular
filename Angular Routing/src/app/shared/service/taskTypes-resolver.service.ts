import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TaskTypeObj, TaskTypeResolved } from '../model/taskTypeObj';
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
    const id = route.paramMap.get('id');
    console.log('ID RESOLVED: ' + id);

    // if (isNaN(+id)) {
    //   const message = `Task id was not a number: ${id}`;
    //   console.error(message);
    //   return of({ taskType: null, error: message });
    // }

    return this.taskTypeService.getTaskById(id).pipe(
      map((taskType) => ({ taskType })),
      catchError((error) => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({ taskType: null, error: message });
      })
    );
  }
}
