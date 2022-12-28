import { iProducts } from "../../../Providers/cartContext/@types";

export interface iProductData {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface iProductProps {
  product: iProducts;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
