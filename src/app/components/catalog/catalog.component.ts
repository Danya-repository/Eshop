import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {products as data} from "../../mocks/products";
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: ProductInterface[] | undefined;
  sub: Subscription | undefined;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.sub = this.productService.getAll().subscribe(products => {
      this.products = products;
    })
  }

}
