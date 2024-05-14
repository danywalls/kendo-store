import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product, ProductsService } from './services/products.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public products$ = inject(ProductsService).products$;
  public selectedProduct!: Product | undefined;

  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
