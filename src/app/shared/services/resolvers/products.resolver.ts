import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductService} from "../product.service";
import {ProductInterface} from "../../models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<ProductInterface[]> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductInterface[]> {
    return this.productService.getAll(route.params?.['productType']);
  }
}
