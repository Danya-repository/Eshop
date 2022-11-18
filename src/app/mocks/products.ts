import {ProductInterface} from "../models/product.interface";

export const products: ProductInterface[] = [
  {
    id: 1,
    name: "Спасательный жилет BRP Men's Airflow PFD",
    price: 6900,
    image: "assets/vest.png",
    available: true,
    discount: false,
    favorite: true
  },
  {
    id: 2,
    name: "Спасательный жилет BRP Men's Airflow PFD",
    price: 2,
    image: "assets/vest.png",
    available: false,
    discount: false,
    favorite: true
  },
  {
    id: 3,
    name: "Спасательный жилет BRP Men's Airflow PFD",
    price: 2,
    image: "assets/vest.png",
    available: false,
    discount: true,
    favorite: false
  },
  {
    id: 4,
    name: "Favorite",
    price: 4,
    image: "assets/vest.png",
    available: false,
    discount: true,
    favorite: true
  }
]
