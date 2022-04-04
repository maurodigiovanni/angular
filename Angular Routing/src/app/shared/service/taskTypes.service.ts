import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { TaskType } from 'src/app/shared/model/TaskTypeObj';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GetTaskTypesResponse } from '../model/response/getTaskTypesResponse';
import { TaskTypeObj } from '../model/taskTypeObj';

@Injectable({
  providedIn: 'root',
})
export class TaskTypesService {
  private taskTypeUrl = environment.baseUrl + 'getTaskTypes';
  constructor(private http: HttpClient) {}

  // getListUserObservable() {
  //   return this.http.get<TaskTypeObj[]>(this.apiGetUrl).pipe(
  //     map((response: any) => response as TaskTypeObj[]),
  //     catchError(this.handleErrosObs)
  //   );
  // }

  public getTaskTypesList(): Observable<TaskTypeObj[]> {
    return this.http
      .get<TaskTypeObj[]>(environment.baseUrl + 'getTaskTypes')
      .pipe(
        tap((data) => console.log('getTaskTypes ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getTaskById(id: string): Observable<TaskTypeObj> {
    // if (id === 0) {
    //   return of(this.initializeProduct());
    // }
    const url = `${this.taskTypeUrl}/${id}`;
    return this.http.get<TaskTypeObj>(url).pipe(
      tap((data) => console.log('getTaskType: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
