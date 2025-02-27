import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../core/interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly baseUrl = 'http://localhost:3000';
  
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<ProductModel[]> {
    const url = `${this.baseUrl}/products`;
    return this.httpClient.get<ProductModel[]>(url);
  }
}
