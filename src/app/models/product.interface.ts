import {CharacteristicProductInterface} from "./characteristic-product.interface";

export interface ProductInterface {
  id?: number,
  name: string,
  price: number,
  oldPrice?: number,
  available: boolean,
  image?: string,
  discount?: boolean
  favorite?: boolean
  code?: string,
  characteristic?: CharacteristicProductInterface
}
