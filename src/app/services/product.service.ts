import {Injectable} from '@angular/core';
import {ProductInterface} from "../models/product.interface";
import {Observable} from "rxjs";
import {products, products as data} from "../mocks/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getOne(id: number | undefined): Observable<ProductInterface> {
    return new Observable<ProductInterface>(subscriber => {
      // @ts-ignore
      let prodItem = data.find(p => p.id === +id)
      subscriber.next(prodItem);
    })
  }

  getAll(type: string) {
    return products.filter(item => item.type === type);
  }

  deleteOne(id: number): Observable<ProductInterface> {
    return new Observable<ProductInterface>(subscriber => {
      data.filter((p) => p.id != +id);
    })
  }

  putOne(product: ProductInterface): Observable<ProductInterface> {
    return new Observable<ProductInterface>(subscriber => {

      data.map(item => {
        // @ts-ignore
        if (item.id === +product.id) {
          item = product
          subscriber.next(item)
        }
      })
    })
  }
}
