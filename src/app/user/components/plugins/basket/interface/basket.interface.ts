import { IProduct } from "src/app/shared/models/product.interface";

export interface IBasket {
    open: boolean,
    totalPrice: number,
    products: IProduct[]
}