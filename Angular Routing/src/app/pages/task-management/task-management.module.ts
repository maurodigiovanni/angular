import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTypesComponent } from './task-types/task-types.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskTypesService } from '../../shared/service/taskTypes.service';
import { TaskTypesResolverService } from '../../shared/service/taskTypes-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskTypesComponent,
        resolve: { resolvedTaskTypes: TaskTypesResolverService },
      },
    ]),
  ],
  providers: [TaskTypesService],

  declarations: [TaskTypesComponent],
})
export class TaskManagementModule {}
