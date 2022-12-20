import { useContext, useEffect, useRef } from "react";

import { CartContext } from "../../Contexts/cartContext";
import { CartProduct } from "../cartProduct";
import { CartTotal } from "../cartTotal";
import { CartBox, CartContent, CartHeader } from "./styles";

import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { IconButton } from "@mui/material";

export const Cart = () => {
  const { currentSale, setIsOpenCart } = useContext(CartContext);
  const modalRef = useRef(null);

  return (
    <CartBox ref={modalRef}>
      <div>
        <CartHeader>
          <h3>Carrinho de compras</h3>
          <IconButton
            aria-label="close-modal"
            sx={{ "&:hover": { backgroundColor: "#ffffff1c" } }}
            onClick={() => setIsOpenCart(false)}
          >
            <CloseTwoToneIcon sx={{ color: "rgba(255, 255, 255, 0.5)" }} />
          </IconButton>
        </CartHeader>
        {currentSale?.length === 0 ? (
          <CartContent heightSize="158px">
            <h4>Sua sacola está vazia</h4>
            <span>Adicione itens</span>
          </CartContent>
        ) : (
          <CartContent heightSize="305px">
            <ul>
              {currentSale?.map((product) => {
                return <CartProduct data={product} key={product.id} />;
              })}
            </ul>
          </CartContent>
        )}
        {!!currentSale?.length && <CartTotal />}
      </div>
    </CartBox>
  );
};
