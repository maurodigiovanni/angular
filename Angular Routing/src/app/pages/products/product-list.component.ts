import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@model/product';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../product-categories/product-category';
import { ProductCategoryService } from '../product-categories/product-category.service';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = '';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];
  categories: ProductCategory[] = [];
  sub!: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private productCategoryService: ProductCategoryService
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title'];
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    this.showImage =
      this.route.snapshot.queryParamMap.get('showImage') === 'true';

    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.performFilter(this.listFilter);
      },
      error: (err) => (this.errorMessage = err),
    });

    this.productCategoryService.productCategories$.subscribe({
      next: (categories) => {
        this.categories != categories;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  // vm$ = combineLatest([this.products, this.categories]).pipe(
  //   map(([products, categories]) => ({
  //     products,
  //     categories,
  //   }))
  // );
  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: Product) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
