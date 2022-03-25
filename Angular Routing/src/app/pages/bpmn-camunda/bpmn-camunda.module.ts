import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BpmnComponent } from './bpmn/bpmn.component';
import { DiagramComponent } from './diagram/diagram.component';
@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: BpmnComponent,
      },
    ]),
  ],
  declarations: [BpmnComponent, DiagramComponent],
})
export class BpmnCamundaModule {}
