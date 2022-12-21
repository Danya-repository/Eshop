import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../../shared/models/product.interface";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit, OnDestroy {

  products: IProduct[] | undefined;
  sub: Subscription = new Subscription();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.sub = this.productService.getAll('Запчасти').subscribe(products => {
      this.products = products;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
