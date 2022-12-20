import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment } from "@mui/material";
import { ChangeEvent, useContext, useEffect } from "react";
import { CartContext } from "../../../contexts/cartContext";
import { StyledInput, TextField } from "./styles";
export const SearchInput = () => {
  const { isexpanded, setisexpanded, setInputValue, isError, inputValue } =
    useContext(CartContext);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.id !== "outlined-full-width" &&
        target.id !== "search-icon" &&
        target.id !== "search-box" &&
        target.tagName !== "path"
      ) {
        setisexpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <StyledInput
      isExpanded={isexpanded}
      onChange={(e: ChangeEvent<HTMLFormElement>) =>
        setInputValue(e.target.value)
      }
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <TextField
          id="outlined-full-width"
          isExpanded={isexpanded}
          placeholder="Buscar"
          fullWidth
          variant="outlined"
          error={isError}
          value={inputValue}
        />
        <InputAdornment position="start">
          <IconButton
            id="search-box"
            onClick={() => setisexpanded(!isexpanded)}
          >
            <SearchIcon id="search-icon" />
          </IconButton>
        </InputAdornment>
      </div>
    </StyledInput>
  );
};
