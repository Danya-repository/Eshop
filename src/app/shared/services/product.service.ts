import {Injectable} from '@angular/core';
import {IProduct} from "../models/product.interface";
import {Observable} from "rxjs";
import {products, products as data} from "../mocks/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getOne(id: number | undefined): Observable<IProduct> {
    return new Observable<IProduct>(subscriber => {
      // @ts-ignore
      let prodItem = data.find(p => p.id === +id)
      subscriber.next(prodItem);
    })
  }

  getAll(type: string): Observable<IProduct[]> {
    return new Observable<IProduct[]>(subscriber => {
      subscriber.next(products.filter(item => item.type === type));
    })
  }

  deleteOne(id: number): Observable<IProduct> {
    return new Observable<IProduct>(subscriber => {
      data.filter((p) => p.id != +id);
    })
  }

  putOne(product: IProduct): Observable<IProduct> {
    return new Observable<IProduct>(subscriber => {

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
