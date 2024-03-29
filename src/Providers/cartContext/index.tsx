import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../services/requests";
import { iCartContext, iCartProps, iProducts } from "./@types";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProps) => {
  const [products, setProducts] = useState<iProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState([] as iProducts[]);
  const [currentSale, setCurrentSale] = useState([] as iProducts[]);
  const [inputValue, setInputValue] = useState("");
  const [totalItemCart, setTotalItemCart] = useState(0);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isexpanded, setisexpanded] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      if (localStorage.userToken) {
        const { data } = await Api.get("/products", {
          headers: { Authorization: `Bearer ${localStorage.userToken}` },
        });

        setProducts(data);
      } else {
        localStorage.clear();
        navigate("/");
      }
    } catch (err) {
      toast.error("Ops! Aconteceu algo de errado.");
      localStorage.clear();
      navigate("/");
      return err;
    }
  };
  useEffect(() => {
    const handleSearch = () => {
      const searchValue = inputValue.toLowerCase();

      if (searchValue.length) {
        const filteredList = products.filter((elem) =>
          elem.name.toLowerCase().includes(searchValue)
        );
        setFilteredProducts([...filteredList]);
        setInputValue(
          searchValue.charAt(0).toUpperCase() + searchValue.slice(1)
        );
        setIsError(false);

        if (!filteredList.length) {
          setIsError(true);
        }
      } else {
        setFilteredProducts([]);
      }
    };
    handleSearch();
  }, []);
  const removeProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newList = currentSale.filter(
      (elem) => parseInt(e.currentTarget.id) !== elem.id
    );
    setTotalItemCart((old) => old - 1);
    setCurrentSale([...newList]);
  };
  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        currentSale,
        setCurrentSale,
        inputValue,
        setInputValue,
        totalItemCart,
        setTotalItemCart,
        isOpenCart,
        setIsOpenCart,
        isexpanded,
        setisexpanded,
        isError,
        setIsError,
        removeProduct,
        fetchProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
