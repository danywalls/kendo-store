import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsService} from "./services/products.service";
import {AsyncPipe, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'testing-in-angular';
  public products$ = inject(ProductsService).products$;

}