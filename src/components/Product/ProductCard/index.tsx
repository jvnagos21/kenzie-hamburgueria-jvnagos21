import { Button } from "../../../styles/button";
import { ProductContent, ProductInfo } from "./styles";
import { iProductProps } from "./@types";

export const Product = ({ product, onClick }: iProductProps) => {
  return (
    <ProductContent>
      <div className="img-box">
        <img draggable="false" src={product.img} alt={product.name} />
      </div>
      <ProductInfo>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <Button
          id={product.id.toString()}
          onClick={onClick}
          variant="mediumGreen"
        >
          Adicionar
        </Button>
      </ProductInfo>
    </ProductContent>
  );
};
