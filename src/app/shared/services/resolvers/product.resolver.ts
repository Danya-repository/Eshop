import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IProduct} from "../../models/product.interface";
import {Observable} from "rxjs";
import {ProductService} from "../product.service";


@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProduct>{

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct> {
    return this.productService.getOne(+route.params['id'])
    }
}
