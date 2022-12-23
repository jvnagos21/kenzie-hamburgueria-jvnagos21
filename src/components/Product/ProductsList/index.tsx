import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext, iProducts } from "../../../contexts/cartContext";
import { Button } from "../../../styles/button";
import { Product } from "../ProductCard";
import { StyledProductsBox, FilterTools } from "./styles";

export const ProductsList = () => {
  const {
    products,
    currentSale,
    setCurrentSale,
    setFilteredProducts,
    filteredProducts,
    inputValue,
    setInputValue,
    setTotalItemCart,
  } = useContext(CartContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let obj: iProducts | null =
      products.find(({ id }) => parseInt(e.currentTarget.id) === id) || null;

    if (!currentSale.find((elem) => parseInt(e.currentTarget.id) === elem.id)) {
      if (obj !== null) {
        toast.success(`${obj.name} foi adicionado ao carrinho`, {
          autoClose: 800,
        });
        setTotalItemCart((old) => old + 1);
        setCurrentSale([...currentSale, obj]);
      }
    } else {
      toast.warn("O produto já foi adicionado!");
      setCurrentSale(currentSale);
    }
  };

  const newData = filteredProducts.length ? filteredProducts : products;

  return (
    <StyledProductsBox>
      {!!filteredProducts.length && (
        <FilterTools>
          <div>
            <h3>Resultados para:</h3>
            <span>{inputValue}</span>
          </div>
          <Button
            onClick={(e) => {
              setInputValue("");
              !e.currentTarget.value.length && setFilteredProducts([]);
            }}
            variant="mediumGreen"
          >
            Limpar busca
          </Button>
        </FilterTools>
      )}
      <ul>
        {newData.length !== 0 &&
          newData.map((product) => {
            return (
              <Product
                product={product}
                onClick={handleClick}
                key={product.id}
              />
            );
          })}
      </ul>
    </StyledProductsBox>
  );
};
