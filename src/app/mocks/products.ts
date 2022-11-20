import {ProductInterface} from "../models/product.interface";

export const products: ProductInterface[] = [
  {
    id: 1,
    name: "Спасательный жилет BRP Men's Airflow PFD",
    price: 6900,
    image: "assets/vest.png",
    available: true,
    discount: false,
    favorite: true,
    code: "1241141-1",
    characteristic: {
      manufacturer: "Италия",
      quantity: 5,
      power: "127.6",
      engineType: "Бензиновый",
      yearOfIssue: 2021
    }
  },
  {
    id: 2,
    name: "Спасательный жилет BRP Men's Airflow PFD",
    price: 2,
    image: "assets/vest.png",
    available: false,
    discount: false,
    favorite: true,
    code: "1241141-2",
    characteristic: {
      manufacturer: "Канада",
      quantity: 3,
      power: "150.5",
      engineType: "Бензиновый",
      yearOfIssue: 2021
    }
  },
  {
    id: 3,
    name: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
    price: 1000000,
    oldPrice: 1200475,
    image: "assets/vest.png",
    available: true,
    discount: true,
    favorite: false,
    code: "1241141-3",
    characteristic: {
      manufacturer: "Япония",
      quantity: 15,
      power: "320.5",
      engineType: "Бензиновый",
      yearOfIssue: 2021
    }
  },
  {
    id: 4,
    name: "Favorite",
    price: 4,
    image: "assets/vest.png",
    available: false,
    discount: true,
    favorite: true,
    code: "1241141-4",
    characteristic: {
      manufacturer: "Норвегия",
      quantity: 1,
      power: "220.6",
      engineType: "Бензиновый",
      yearOfIssue: 2021
    }
  }
]
