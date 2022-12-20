import styled from "styled-components";

export const ProductCartContent = styled.li`
  display: flex;
  justify-content: space-between;
  /* background: red; */
  width: 100%;

  .img-box {
    background: var(--color-grey-20);
    border-radius: 5px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-box img {
    width: 70px;
    height: 70px;
  }

  .product-info {
    width: 75%;
    padding: 0.4375rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .product-info .product-desc h4 {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-grey-100);
  }

  .product-info .product-desc span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--color-grey-50);
  }

  .product-info button {
    margin-top: 4px;
    font-weight: 500;
    font-size: 0.625rem;
    line-height: 0.75rem;
    font-family: var(--font-family-1);
    color: var(--color-grey-50);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .product-info button:hover {
    color: var(--color-grey-100);
  }
`;
