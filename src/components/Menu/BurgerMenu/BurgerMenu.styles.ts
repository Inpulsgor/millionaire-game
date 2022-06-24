import styled from 'styled-components';
import { TBurgerMenu } from '../../../typescriptExports/TBurgerMenu';

const StyledBurger = styled.div<TBurgerMenu>`
  width: 16px;
  height: 14px;
  cursor: pointer;
  position: fixed;
  top: 22px;
  right: 22px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 100;

  div {
    width: 1rem;
    height: 0.15rem;
    background: ${({ theme }) => theme.colors.black100};
    border-radius: 2px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default StyledBurger;
