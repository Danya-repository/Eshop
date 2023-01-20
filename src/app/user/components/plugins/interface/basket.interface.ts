import { ProductInterface } from "src/app/shared/models/product.interface";

export interface BasketInterface {
    open: boolean,
    totalPrice: number,
    products: ProductInterface[]
}
