import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductService} from "../../shared/services/product.service";
import {ProductInterface} from "../../shared/models/product.interface";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();
  // @ts-ignore
  public product: ProductInterface;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe(resp => {
      this.product = resp['product']
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleLike() {
    this.product.favorite = !this.product.favorite;
    this.productService.putOne(this.product).subscribe(resp => {
      this.product = resp
    })
  }
}
