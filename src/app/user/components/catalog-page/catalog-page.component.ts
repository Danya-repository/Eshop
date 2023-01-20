import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductInterface} from "../../../shared/models/product.interface";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit, OnDestroy {

  products!: ProductInterface;
  sub: Subscription = new Subscription();

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe(data => {
      let key = Object.keys(data?.['products'])[0]
      this.products = data?.['products'][key];
    }, (errorData) => {
      console.log(errorData)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
