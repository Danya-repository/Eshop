import {Component, Input, OnInit} from '@angular/core';
import {TabMenuService} from "../../../../shared/services/tab-menu.service";
import {ButtonStateInterface} from "../../../../shared/models/buttonState.interface";
import {CarouselMenuEnum} from "../../../../shared/enums/сarouselMenu.enum";
import {TabsState} from "../../../components/plugins/tabs/tabs-state";
import {ProductInterface} from "../../../../shared/models/product.interface";
import {delay, Subscription} from "rxjs";
import {ProductService} from "../../../../shared/services/product.service";

@Component({
  selector: 'app-product-carousel-menu',
  templateUrl: './product-carousel-menu.component.html',
  styleUrls: ['./product-carousel-menu.component.scss'],
  providers: [TabMenuService]
})
export class ProductCarouselMenuComponent implements OnInit {

  tabs: ButtonStateInterface[] = [
    {active: false, text: 'Запчасти', identifier: CarouselMenuEnum.SPARES},
    {active: false, text: 'Моторы', identifier: CarouselMenuEnum.ENGINES},
    {active: false, text: 'Шины', identifier: CarouselMenuEnum.TIRES},
    {active: false, text: 'Электроника', identifier: CarouselMenuEnum.ELECTRONICS},
    {active: false, text: 'Инструменты', identifier: CarouselMenuEnum.TOOLS},
    {active: false, text: 'Аксессуары', identifier: CarouselMenuEnum.ACCESSORIES}
  ];
  products: ProductInterface[] = [];

  productCarouselSectionSub: Subscription = new Subscription();
  productsSub: Subscription = new Subscription();

  isLoad: boolean = false;

  constructor(
    public tabMenuService: TabMenuService,
    protected productService: ProductService
  ) {
    this.tabMenuService.initialize(this.tabs, 0)
  }

  ngOnInit(): void {
    this.getProducts(this.tabMenuService.getActiveButton())
    this.tabMenuService.$stream.subscribe(button => {
      this.getProducts(button)
    })
  }

  getProducts(button: ButtonStateInterface | undefined) {
    if (!button) {
      this.isLoad = false;
      this.products = [];
      return
    }

    this.products = [];
    this.isLoad = true;
    this.productsSub = this.productService
                                .getAll(button.identifier)
                                .pipe(delay(2000))
                                .subscribe((products) => {
                                  this.isLoad = false;
                                  this.products = products;
    });
  }

  ngOnDestroy(): void {
    this.productCarouselSectionSub.unsubscribe();
    this.productsSub.unsubscribe();
  }

  toggleActivate(button: ButtonStateInterface) {
    this.tabMenuService.setActiveButton(button);
    this.getProducts(this.tabMenuService.getActiveButton());
  }
}
