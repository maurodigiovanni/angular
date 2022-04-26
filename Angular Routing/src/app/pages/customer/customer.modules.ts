import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerService } from './customer.service';

const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    data: { title: 'Product List' },
  },
  {
    path: ':id',
    component: CustomerListComponent,
    //resolve: { resolvedData: ProductResolver },
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(customerRoutes)],
  declarations: [CustomerListComponent, CustomerDetailComponent],
  providers: [CustomerService],
})
export class CustomersModule {}
