import {Component, Input} from "@angular/core";
import {IProduct} from "../../../../shared/models/product.interface";
import {delay, Subscription} from "rxjs";
import {ProductService} from "../../../../shared/services/product.service";
import {IButtonState} from "../../../../shared/models/buttonState.interface";
import {TabMenuService} from "../../../../shared/services/tab-menu.service";

@Component({
  selector: 'app-product-carousel-section',
  templateUrl: './product-carousel-section.component.html',
  styleUrls: ['./product-carousel-section.component.scss'],
  providers: [TabMenuService]
})
export class ProductCarouselSectionComponent {

  @Input() titleSection = '';

  productCarouselSectionSub: Subscription = new Subscription();
  productsSub: Subscription = new Subscription();

  products: IProduct[] = [];
  isLoad: boolean = false;

  constructor(
    private tabMenuService: TabMenuService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productCarouselSectionSub = this.tabMenuService.$stream.subscribe(button => {
      this.getProducts(button)
    })
  }

  getProducts(button: IButtonState | undefined) {
    if (!button) {
      this.isLoad = false;
      this.products = [];
      return
    }

    this.products = [];
    this.isLoad = true;
    this.productsSub = this.productService
      .getAll(button.identifier)
      .pipe(delay(1000))
      .subscribe((products) => {
        this.isLoad = false;
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.productCarouselSectionSub.unsubscribe();
    this.productsSub.unsubscribe();
  }
}
