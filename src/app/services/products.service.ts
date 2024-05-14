import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {catchError, throwError} from "rxjs";

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
