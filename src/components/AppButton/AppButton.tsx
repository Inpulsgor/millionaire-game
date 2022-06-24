import React from 'react';
import StyledButton from './AppButton.styles';

interface IntAppButton {
  children: string;
  onClick?: () => void;
}

const AppButton = ({ children, onClick }: IntAppButton) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default AppButton;
