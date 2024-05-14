import { ProductsService } from './products.service';
import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MOCK_PRODUCTS } from '../tests/mock';

describe('products service', () => {
  let productService: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ProductsService,
      ],
    });
    productService = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('expect create a instance', () => {
    expect(productService).toBeTruthy();
  });

  it('expect make a http request', fakeAsync(() => {
    productService.products$.subscribe((response) => {
      expect(response).toEqual(MOCK_PRODUCTS);
    });
    const req = httpTestingController.expectOne(
      'https://fakestoreapi.com/products',
    );
    httpTestingController.verify();

    expect(req.request.method).toBe('GET');
    req.flush(MOCK_PRODUCTS);

    flush();
  }));
});
