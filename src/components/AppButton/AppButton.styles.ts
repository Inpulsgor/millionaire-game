import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 16px 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.orange100};
  width: 288px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white100};

  &: hover {
    background: ${({ theme }) => theme.colors.orange80};
  }

  &: active {
    background: ${({ theme }) => theme.colors.orange120};
  }

  @media (min-width: 1200px) {
    padding: 20px 24px;
    border-radius: 12px;
    width: 296px;
    font-size: 20px;
  }
`;

export default StyledButton;
