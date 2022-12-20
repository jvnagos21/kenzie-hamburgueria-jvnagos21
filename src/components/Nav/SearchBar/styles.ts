import { IconButton as iButton, TextField as Input } from "@mui/material";
import styled from "styled-components";

interface IInputProps {
  isExpanded: boolean;
}

export const StyledInput = styled.form<IInputProps>`
  width: ${({ isExpanded }) => (isExpanded ? "280px" : "35px")};
  transition: 0.8s cubic-bezier(0.47, 0.4, 0.175, 1.2);

  & > div {
    width: ${({ isExpanded }) => (isExpanded ? "100%" : "15%")};
    transition: 0.8s cubic-bezier(0.47, 0.4, 0.175, 1.2);
  }

  input {
    padding-right: 48px;
  }

  #search-box {
    position: ${({ isExpanded }) => (isExpanded ? "absolute" : "static")};
    pointer-events: ${({ isExpanded }) => (isExpanded ? "none" : "auto")};
  }

  #search-icon {
    position: ${({ isExpanded }) => (isExpanded ? "absolute" : "static")};
    right: 35px;
    color: #bdbdbd;
  }

  @media (max-width: 488px) {
    width: ${({ isExpanded }) => (isExpanded ? "200px" : "35px")};
  }

  @media (max-width: 410px) {
    width: ${({ isExpanded }) => (isExpanded ? "140px" : "35px")};
  }
`;

export const TextField = styled(Input)<IInputProps>`
  margin: 0;
  width: ${({ isExpanded }) => (isExpanded ? "100%" : "0%")};
  pointer-events: ${({ isExpanded }) => (isExpanded ? "auto" : "none")};
  opacity: ${({ isExpanded }) => (isExpanded ? "1" : "0")};
  transition: 0.8s cubic-bezier(0.47, 0.4, 0.175, 1.2);
`;
