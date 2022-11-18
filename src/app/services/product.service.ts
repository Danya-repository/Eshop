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
      let prodItem: ProductInterface = {
        name: "",
        price: 0,
        available: false
      };

      [...data].forEach(p => {
        if(p.id === id) {
          prodItem = p;
        }
      })

      setTimeout(() => {
        subscriber.next(prodItem);
      }, 3000)
    })
  }

  getAll(): Observable<ProductInterface[]> {
    return new Observable<ProductInterface[]>(subscriber => {
      subscriber.next(data);
    })
  }

  deleteOne(id: number): Observable<ProductInterface> {
    return new Observable<ProductInterface>(subscriber => {
      data.filter((p) => p.id != id);
    })
  }

  putOne(product: ProductInterface): Observable<ProductInterface> {
    return new Observable<ProductInterface>(subscriber => {

      data.map((productInArray, indexProductInrArray) => {
        if (productInArray.id === product.id) {
          productInArray = product;
          setTimeout(() => {
            subscriber.next(data[indexProductInrArray]);
          }, 3000)
        }
      })
    })
  }
}
