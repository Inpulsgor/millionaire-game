import React from 'react';
import StyledBurger from './BurgerMenu.styles';

interface IntBurger {
  open: boolean;
  handleClick: React.MouseEventHandler;
}

const BurgerMenu = ({ open, handleClick }: IntBurger) => {
  return (
    <StyledBurger open={open} onClick={handleClick}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default BurgerMenu;
