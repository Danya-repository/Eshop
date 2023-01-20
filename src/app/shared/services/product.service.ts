import {Injectable} from '@angular/core';
import {ProductInterface} from "../models/product.interface";
import {Observable} from "rxjs";
import {products, products as data} from "../mocks/products";
import {HttpClient} from "@angular/common/http";

export interface ResponseInterface {
  key: string,
  products: []
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url: string = 'https://eshopangular-88d74-default-rtdb.firebaseio.com'

  constructor(private http: HttpClient) { }

  getOne(id: number): Observable<ProductInterface> {
    return new Observable<ProductInterface>(subscriber => {
      // @ts-ignore
      let prodItem = data.find(p => p.id === +id)
      subscriber.next(prodItem);
    })
  }

  getAll(type: string): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(`${this.url}/products/${type}.json`)
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
