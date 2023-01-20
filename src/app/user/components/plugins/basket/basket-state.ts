import { ProductInterface } from "src/app/shared/models/product.interface";
import { BasketInterface } from "../interface/basket.interface";
export class BasketState implements BasketInterface {
    open: boolean = false;
    totalPrice: number = 0;
    products: ProductInterface[] = [];

    updateTotal() {
        this.totalPrice = 0
        this.products.forEach(p => {
            this.totalPrice += p.price
        });
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }

    getProducts(): ProductInterface[] {
        return this.products;
    }

    clearProducts() {
        this.products = [];
    }

    addProduct(product: ProductInterface) {
        if (this.products.includes(product)) return;
        this.products.push(product)
        this.updateTotal();
    }

    removeProduct(product: ProductInterface) {
        this.products.filter(p => p.id == product.id)
        this.updateTotal();
    }

    toggleBasket() {
        this.open = !this.open;
    }

}
