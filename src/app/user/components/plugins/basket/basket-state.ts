import { IProduct } from "src/app/shared/models/product.interface";
import { IBasket } from "./interface/basket.interface";
export class BasketState implements IBasket {
    open: boolean = false;
    totalPrice: number = 0;
    products: IProduct[] = [];

    updateTotal() {
        this.totalPrice = 0
        this.products.forEach(p => {
            this.totalPrice += p.price
        });
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }

    getProducts(): IProduct[] {
        return this.products;
    }

    clearProducts() {
        this.products = [];
    }

    addProduct(product: IProduct) {
        if (this.products.includes(product)) return;
        this.products.push(product)
        this.updateTotal();
    }

    removeProduct(product: IProduct) {
        this.products.filter(p => p.id == product.id)
        this.updateTotal();
    }

    toggleBasket() {
        this.open = !this.open;
    }

}