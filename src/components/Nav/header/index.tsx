import { StyledHeader } from "./styles";
import { NavBar } from "../NavBar";
import logo from "../../../assets/mainLogo.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <img draggable="false" src={logo} alt="Burguer Kenzie" />
        <NavBar />
      </div>
    </StyledHeader>
  );
};
