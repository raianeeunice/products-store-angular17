import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductModel } from '../../../../../core/interfaces/product.model';

@Component({
  selector: 'app-card-list',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  item = input.required<ProductModel>()
}
