import {Component, Input} from "@angular/core";
import {ProductInterface} from "../../../shared/models/product.interface";
import {delay, Subscription} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ButtonStateInterface} from "../../../shared/models/buttonState.interface";
import {TabMenuService} from "../../../shared/services/tab-menu.service";
import {MenuEnum} from "../../../shared/enums/menu.enum";

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

  products!: ProductInterface[];

  buttons: ButtonStateInterface[] = [
    {id: 1,active: true, text: 'Запчасти', identifier: "spares"},
    {id: 2,active: false, text: 'Двигатели', identifier: "engines"},
    {id: 3,active: false, text: "Снегоходы", identifier: "snowmobiles"},
    {id: 4,active: false, text: "Вездеходы", identifier: "cross-country-vehicles"},
    {id: 5,active: false, text: "Лодки", identifier: "boats"},
    {id: 6,active: false, text: "Катера", identifier: "launches"},
  ];
  isLoad: boolean = false;

  constructor(
    private tabMenuService: TabMenuService,
    private productService: ProductService,
  ) {}

  getActiveButton(): ButtonStateInterface | undefined {
    return this.buttons.find(button => button.active);
  }


  ngOnInit(): void {
    let activeIdentifier = this.getActiveButton()?.identifier || '';
    this.productService.getAll('spares').subscribe(data => {

      // this.products = Object.values(data)[0];


    }, (errorData) => {
      console.log(errorData)
    })




    // this.tabMenuService.initialize(this.buttons);
    //To
    // this.productService.getAll()




    // this.buttons = this.tabMenuService.state;
    // this.productCarouselSectionSub = this.tabMenuService.$stream.subscribe(button => {
    //   this.getProducts(button);
    // })
    // асинхронный запрос здесь будет
    // setTimeout(() => {
    //   this.tabMenuService.$stream.next(this.tabMenuService.getActiveButton());
    // }, 1000);
  }

  toggleActivate(button: ButtonStateInterface) {
    if (this.isLoad) return
    this.tabMenuService.setActiveButton(button);
    this.buttons = this.tabMenuService.state;
  }

  getProducts(button: ButtonStateInterface) {
    // this.products = [];
    // this.isLoad = true;
    // this.productsSub = this.productService
    //   .getAll(button.identifier)
    //   .pipe(delay(1000))
    //   .subscribe((products) => {
    //     this.isLoad = false;
    //     this.products = products;
    //   });
  }

  ngOnDestroy(): void {
    this.productCarouselSectionSub.unsubscribe();
    this.productsSub.unsubscribe();
  }
}
