import {Injectable} from '@angular/core';
import {ProductInterface} from "../models/product.interface";
import {map, Observable} from "rxjs";
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
    return this.getAll().pipe(
      map(arr => arr.find(product => product.id === id) as ProductInterface)
    )
  }

  getAll(type?: string): Observable<ProductInterface[]> {
    let path = type ? `${this.url}/products/${type}.json` : `${this.url}/products.json`

    return this.http.get<ResponseInterface>(path)
      .pipe(map(response => getProductsArrow(response)))
  }
}

function getProductsArrow(response: ResponseInterface): ProductInterface[] {
  let resultArr: ProductInterface[] = [];

  for (const key in response) {
    let underObj: any = response[key as keyof ResponseInterface];

    if (Array.isArray(underObj)) resultArr = [...resultArr, ...underObj];
    else resultArr = [...resultArr, ...getProductsArrow(underObj)]
  }
  return resultArr
}














// deleteOne(id: number): Observable<ProductInterface> {
//   return new Observable<ProductInterface>(subscriber => {
//     data.filter((p) => p.id != +id);
//   })
// }
//
// putOne(product: ProductInterface): Observable<ProductInterface> {
//   return new Observable<ProductInterface>(subscriber => {
//
//     data.map(item => {
//       // @ts-ignore
//       if (item.id === +product.id) {
//         item = product
//         subscriber.next(item)
//       }
//     })
//   })
// }
