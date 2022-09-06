
export type BurgerInfo = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
}

export type ArrSortType = {
  name: string;
  sortProperty: string;
}

export type Category = string;