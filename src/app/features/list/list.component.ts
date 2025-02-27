import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductModel } from '../../../core/interfaces/product.model';
import { ProductsService } from './../../../shared/services/products.service';
import { MatButtonModule } from '@angular/material/button';
import { CardListComponent } from './components/card-list/card-list.component';

@Component({
  selector: 'app-list',
  imports: [CardListComponent],
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
