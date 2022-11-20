import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProductInterface} from "../../models/product.interface";
import {Observable} from "rxjs";
import {ProductService} from "../product.service";


@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductInterface>{

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface> {
    return this.productService.getOne(+route.params['id'])
    }
}
