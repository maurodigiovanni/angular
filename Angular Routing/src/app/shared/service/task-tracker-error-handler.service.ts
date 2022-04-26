import { Injectable, ErrorHandler } from '@angular/core';
import { TaskTrackerError } from '@model//TaskTrackerError';

@Injectable()
export class TaskTrackerErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    let customError: TaskTrackerError = new TaskTrackerError();
    customError.errorNumber = 200;
    customError.message = (<Error>error).message;
    customError.friendlyMessage = 'An error occurred. Please try again.';

    console.log(customError);
  }

  constructor() {}
}
