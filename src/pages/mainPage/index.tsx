import React from "react";
import { MainContainer } from "./styled";
import { Header } from "../../components/header";
import { ProductsList } from "../../components/productList";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cartContext";
import { Cart } from "../../components/cart";
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
