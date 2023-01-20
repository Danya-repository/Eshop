import {ProductCharacteristicInterface} from "./characteristic-product.interface";

export interface ProductInterface {
  id?: number,
  name: string,
  price: number,
  type: string,
  oldPrice?: number,
  available: boolean,
  image?: string,
  discount?: boolean
  favorite?: boolean
  code?: string,
  characteristic?: ProductCharacteristicInterface
}
