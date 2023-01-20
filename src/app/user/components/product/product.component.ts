import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from "../../../shared/models/product.interface";
import {ProductService} from "../../../shared/services/product.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import { BasketService } from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productData: ProductInterface = {name: "", price: 0, type: "", available: true};
  private subscription: Subscription | undefined;

  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  favoriteToggle(event: Event) {
    event.stopPropagation();

    this.subscription = this.productService.putOne({...this.productData, favorite: !this.productData.favorite})
                                      .subscribe(data => {
                                        this.productData = data;
                                      })
  }

  subscribeToAvailableNotification(event: Event) {
    event.stopPropagation();
  }

  goToProductPage() {
    this.router.navigate(['/product', this.productData.id])
  }

  openImage(event: Event) {
    event.stopPropagation();
  }

  toggleAddToBasket(event: Event) {
    event.stopPropagation()
    this.basketService.addProduct(this.productData)
  }
}
