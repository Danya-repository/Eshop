import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductService, ResponseInterface} from "../product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<ResponseInterface> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ResponseInterface> {
    return this.productService.getAll(route.params?.['productType']);
  }
}
