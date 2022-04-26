import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { WelcomeComponent } from './pages/home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './pages/user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';
import { CustomerComponent } from './pages/form-demo/customer.component';
import { DiagramComponent } from './pages/bpmn-camunda/diagram/diagram.component';
import { BpmnCamundaModule } from './pages/bpmn-camunda/bpmn-camunda.module';
import { BpmnComponent } from './pages/bpmn-camunda/bpmn/bpmn.component';
import { ModalContainerComponent } from './pages/home/modal-container.component';

@NgModule({
  // imports: [RouterModule.forRoot(ROUTES, { enableTracing: true })],
  imports: [
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        { path: 'welcome/:id', component: ModalContainerComponent },
        {
          path: 'products',
          canActivate: [AuthGuard],
          //https://app.pluralsight.com/course-player?clipId=40eb0ee9-4330-4e98-af47-c429fd760174
          data: { preload: false },
          loadChildren: () =>
            import('./pages/products/products.module').then(
              (m) => m.ProductModule
            ),
        },
        { path: 'demo-form', component: CustomerComponent },
        {
          path: 'customers',

          //https://app.pluralsight.com/course-player?clipId=40eb0ee9-4330-4e98-af47-c429fd760174
          data: { preload: false },
          loadChildren: () =>
            import('./pages/customer/customer.modules').then(
              (m) => m.CustomersModule
            ),
        },
        { path: 'bpmn', component: BpmnComponent },
        {
          path: 'task-types',
          //canActivate: [AuthGuard],
          //data: { preload: true },
          loadChildren: () =>
            import('./pages/task-management/task-management.module').then(
              (m) => m.TaskManagementModule
            ),
        },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent },
      ],
      { preloadingStrategy: SelectiveStrategy }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// enableTracing: true
