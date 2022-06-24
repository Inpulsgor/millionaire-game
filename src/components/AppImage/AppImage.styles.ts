import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin: 100px auto 40px;
  width: max-content;

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0 80px;
  }
`;

export const StyledImage = styled.img`
  width: 200px;

  @media (min-width: 1024px) {
    width: 458px;
  }
`;
