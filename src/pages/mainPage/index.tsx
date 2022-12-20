import React from "react";
import { MainContainer } from "./styled";
import { Header } from "../../components/Nav/header";
import { ProductsList } from "../../components/Product/ProductsList";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Cart } from "../../components/Cart/CartModal";
import { useEffect } from "react";
const MainPage = () => {
  const { isOpenCart, fetchProducts } = useContext(CartContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <MainContainer className="container">
        <ProductsList />
        {isOpenCart && <Cart />}
      </MainContainer>
    </>
  );
};

export default MainPage;
