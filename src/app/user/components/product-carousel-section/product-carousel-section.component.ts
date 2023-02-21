import {Component, Input} from "@angular/core";
import {ProductInterface} from "../../../shared/models/product.interface";
import {delay, Subscription} from "rxjs";
import {ProductService, ResponseInterface} from "../../../shared/services/product.service";
import {ButtonStateInterface} from "../../../shared/models/buttonState.interface";

@Component({
  selector: 'app-product-carousel-section',
  templateUrl: './product-carousel-section.component.html',
  styleUrls: ['./product-carousel-section.component.scss']
})
export class ProductCarouselSectionComponent {

  @Input() titleSection = '';

  productsSub: Subscription = new Subscription();

  products!: ProductInterface[];

  buttons: ButtonStateInterface[] = [
    {id: 1, active: true, text: 'Запчасти', identifier: "spares"},
    {id: 2, active: false, text: 'Двигатели', identifier: "engines"},
    {id: 3, active: false, text: "Снегоходы", identifier: "snowmobiles"},
    {id: 4, active: false, text: "Вездеходы", identifier: "cross-country-vehicles"},
    {id: 5, active: false, text: "Лодки", identifier: "boats"},
    {id: 6, active: false, text: "Катера", identifier: "launches"},
  ];
  isLoad: boolean = false;

  constructor(private productService: ProductService) {}

  getActiveButtonType(): string {
    let activeButtonType = this.buttons.find(button => button.active);
    if (activeButtonType) {
      return activeButtonType.identifier;
    }
    this.toggleActivate(1)
    return this.buttons[0].identifier
  }

  ngOnInit(): void {
    let activeIdentifier = this.getActiveButtonType();
    this.getProducts(activeIdentifier)
  }

  toggleActivate(buttonId: number) {
    if (this.isLoad) return

    this.buttons.map(buttonItem => {
      buttonItem.active = buttonItem.id === buttonId;
    })

    let activeIdentifier = this.getActiveButtonType();
    this.getProducts(activeIdentifier);
  }

  getProducts(type: string) {
    this.isLoad = true;
    this.products = [];

    if (type) {
      this.productService.getAll(type)
        .pipe(delay(1000))
        .subscribe(products => {
          this.products = products;
          this.isLoad = false;
        }, (errorData) => {
          console.log(errorData)
        }, () => {
          this.isLoad = false;
        })
    }
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }
}
