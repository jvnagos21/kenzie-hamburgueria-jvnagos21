import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { createTheme, styled } from "@mui/material/styles";
import { useContext } from "react";
import { UserContext } from "../../Contexts/userContext";
import { CartContext } from "../../Contexts/cartContext";
import { StyledNavBar } from "./styles";
import { ExpandInput } from "../expandInput";
const CartTheme = createTheme({
  palette: {
    primary: {
      main: "#27AE60",
    },
    secondary: {
      main: "#BDBDBD",
    },
  },
});
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 11,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: CartTheme.palette.primary.main,
  },
}));

export const NavBar = () => {
  const { totalItemCart, setIsOpenCart, isexpanded } = useContext(CartContext);
  const { handleLogout } = useContext(UserContext);

  return (
    <StyledNavBar isExpanded={isexpanded}>
      <li>
        <ExpandInput />
      </li>
      <li>
        <IconButton
          className="to-toggle"
          aria-label="cart"
          onClick={() => setIsOpenCart(true)}
        >
          <StyledBadge
            badgeContent={totalItemCart}
            sx={{ color: CartTheme.palette.secondary.main }}
            color="success"
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </li>
      <li>
        <IconButton
          className="to-toggle"
          aria-label="exit"
          onClick={handleLogout}
        >
          <StyledBadge sx={{ color: CartTheme.palette.secondary.main }}>
            <LogoutTwoToneIcon />
          </StyledBadge>
        </IconButton>
      </li>
    </StyledNavBar>
  );
};
