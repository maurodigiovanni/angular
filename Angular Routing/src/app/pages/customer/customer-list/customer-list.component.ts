import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../customer';
import { CustomerData } from '../customer-data';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'pm-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  errorMessage = '';
  sub!: Subscription;
  selectedCustomer: Customer = new Customer();

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.sub = this.service.getCustomers().subscribe({
      next: (customers) => {
        this.customers = customers;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  showDetails(customer: Customer) {
    this.selectedCustomer = Object.assign({}, customer);
  }

  update(customer: Customer) {
    console.log(customer);
    var cust = this.customers.find((e) => e.customerNo == customer.customerNo);
    Object.assign(cust, customer);
    alert('Customer Saved');
  }
}
