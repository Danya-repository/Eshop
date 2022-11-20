import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productData: ProductInterface = {name: "", price: 0, available: true};
  private subscription: Subscription | undefined;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  favoriteToggle(event: Event) {
    event.stopPropagation();

    this.subscription = this.productService
                                      .putOne({...this.productData, favorite: !this.productData.favorite})
                                      .subscribe(data => {
                                        this.productData = data;
                                        console.log(this.productData)
                                      })
    console.log('LIKE!')
  }

  subscribeToAvailableNotification(event: Event) {
    event.stopPropagation();
    console.log('SUBSCRIBE!')
  }

  goToProductPage() {
    this.router.navigate(['/product', this.productData.id])
    console.log('OPEN PRODUCT!')
  }

  openImage(event: Event) {
    event.stopPropagation();
    console.log('OPEN IMAGE!')
  }

  toggleAddToBasket(event: Event) {
    event.stopPropagation()
    console.log('TOGGLE BASKET')
  }
}