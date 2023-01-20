import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductInterface} from "../../models/product.interface";
import {ProductService} from "../product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<ProductInterface[]> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductInterface[]> {
    return this.productService.getAll(route.params?.['productType']);
  }
}
