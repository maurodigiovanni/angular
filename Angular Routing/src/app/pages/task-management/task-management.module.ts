import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskTypesService } from '../../shared/service/taskTypes.service';
import { TaskTypesResolverService } from '../../shared/service/taskTypes-resolver.service';
import { TaskTypeDetailsComponent } from './task-type-details/task-type-details.component';
import { TaskTypesComponent } from './task-types/task-types.component';
import { TaskTypeTableComponent } from './task-types/task-type-table/task-type-table.component';
import { TaskTypeCardComponent } from './task-types/task-type-card/task-type-card.component';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskTypesComponent,
      },
      {
        path: ':id',
        component: TaskTypeDetailsComponent,
        resolve: { resolvedTaskTypes: TaskTypesResolverService },
      },
    ]),
  ],
  providers: [TaskTypesService],
  declarations: [
    TaskTypesComponent,
    TaskTypeTableComponent,
    TaskTypeDetailsComponent,
    TaskTypeCardComponent,
  ],
})
export class TaskManagementModule {}
