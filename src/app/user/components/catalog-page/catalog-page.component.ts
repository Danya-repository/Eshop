import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductInterface} from "../../../shared/models/product.interface";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ResponseInterface} from "../../../shared/services/product.service";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit, OnDestroy {

  products!: ProductInterface[];
  sub: Subscription = new Subscription();

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe(data => {
      let productResponse: ResponseInterface = data['products']
      let key: string = Object.keys(productResponse)[0]

      this.products = productResponse[key as keyof ResponseInterface] as ProductInterface[];

    }, (errorData) => {
      console.log(errorData)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
