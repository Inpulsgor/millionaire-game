import styled from 'styled-components';
import { TBurgerMenu } from '../../typescriptExports/TBurgerMenu';

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  list-style: none;
  align-self: flex-start;

  @media (min-width: 1024px) {
    align-self: center;
  }
`;

export const MenuContainer = styled.div<TBurgerMenu>`
  min-height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.colors.white100};
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;

export const StyledSvg = styled.svg`
  &:not(:first-child) {
    margin-bottom: 8px;
  }
`;
