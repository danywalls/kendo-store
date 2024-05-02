import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   private API = 'https://fakestoreapi.com/products'
  private http = inject(HttpClient)
  public products$ = this.http.get<Product[]>(this.API);
}
