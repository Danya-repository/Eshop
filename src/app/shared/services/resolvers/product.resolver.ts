import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ProductInterface} from "../../models/product.interface";
import {Observable} from "rxjs";
import {ProductService} from "../product.service";


@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductInterface> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ProductInterface> {
    return this.productService.getOne(+route.params['id'])
  }
}
