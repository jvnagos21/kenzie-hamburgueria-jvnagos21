export interface iCartProps {
  children: React.ReactNode;
}
export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface iCartContext {
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  filteredProducts: iProducts[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  currentSale: iProducts[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProducts[]>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  totalItemCart: number;
  setTotalItemCart: React.Dispatch<React.SetStateAction<number>>;
  isOpenCart: boolean;
  setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  isexpanded: boolean;
  setisexpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  removeProduct: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fetchProducts: any;
}
