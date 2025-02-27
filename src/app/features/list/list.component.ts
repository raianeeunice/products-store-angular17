import { Component, inject } from '@angular/core';
import { ProductModel } from '../../../core/interfaces/product.model';
import { ProductsService } from './../../../shared/services/products.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  productList: ProductModel[] = [];

  productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.productList = products;
    });
  }
}
