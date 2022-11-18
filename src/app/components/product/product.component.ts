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

  @Input() data: ProductInterface = {name: "", price: 0, available: true};
  private subscription: Subscription | undefined;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  favoriteToggle(id: number, event: Event) {
    event.stopPropagation();

    this.subscription = this.productService
                                      .putOne(this.data)
                                      .subscribe(data => {
                                        console.log(data)
                                      })

    this.data.favorite = !this.data.favorite;
    console.log('LIKE!')
  }

  subscribeToAvailableNotification(event: Event) {
    event.stopPropagation();
    console.log('SUBSCRIBE!')
  }

  goToProductPage() {
    // this.productService.getOne(this.data.id).subscribe(goodItem => {
    //   console.log(goodItem)
    // })
    this.router.navigate(['/product', this.data.id])
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
