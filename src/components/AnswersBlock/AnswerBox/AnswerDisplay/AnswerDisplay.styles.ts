import styled from 'styled-components';

interface IntAnswer {
  notClickable: boolean;
}

export const StyledAnswerBox = styled.button<IntAnswer>`
  margin-bottom: 8px;
  cursor: ${({ notClickable }) => (notClickable ? 'auto' : 'pointer')};

  @media (min-width: 1024px) {
    &:nth-child(-n + 2) {
      margin-bottom: 32px;
    }
  }
`;

export const InnerSvgWrapper = styled.div`
  height: 46px;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    height: 57px;
  }
`;

export const Option = styled.span`
  font-size: 14px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.orange100};

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const Answer = styled.span`
  font-size: 14px;
  text-align: left;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
