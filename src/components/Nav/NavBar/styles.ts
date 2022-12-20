import styled from "styled-components";

interface iNavBarProps {
  isExpanded: boolean;
}

export const StyledNavBar = styled.nav<iNavBarProps>`
  display: flex;
  align-items: center;
  gap: 15px;

  li:nth-child(1) {
    position: relative;
    width: auto;
  }

  @media (max-width: 580px) {
    .to-toggle {
      display: ${({ isExpanded }) => (isExpanded ? "none" : "block")};
    }
  }
`;
