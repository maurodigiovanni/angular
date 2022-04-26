import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProductData } from './pages/products/product-data';
import { ProductCategoryData } from './pages/product-categories/product-category-data';
import { Product } from './pages/products/product';
import { ProductCategory } from './pages/product-categories/product-category';
import { Customer } from './pages/customer/customer';
import { CustomerData } from './pages/customer/customer-data';
//import { Supplier } from './suppliers/supplier';

export class AppData implements InMemoryDbService {
  createDb(): {
    products: Product[];
    productCategories: ProductCategory[];
    customers: Customer[];
    // suppliers: Supplier[];
  } {
    const products = ProductData.products;
    const productCategories = ProductCategoryData.categories;
    const customers = CustomerData.customers;
    // const suppliers = SupplierData.suppliers;
    return { products, productCategories, customers };
  }
}
