import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ProductInterface} from "../../../shared/models/product.interface";
import {BasketService} from "../../../shared/services/basket.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();
  public product!: ProductInterface;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe(resp => {
      this.product = resp['product']
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleAddToBasket(event: Event) {
    event.stopPropagation()
    this.basketService.addProduct(this.product)
  }

  toggleLike() {
    this.product.favorite = !this.product.favorite;
    // this.productService.putOne(this.product).subscribe(resp => {
    //   this.product = resp
    // })
  }
}
