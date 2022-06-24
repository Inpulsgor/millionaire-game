import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 100vh;

  @media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    height: max-content;
    aign-self: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  padding: 0 30px;
  max-width: 320px;
  margin-bottom: 56px;

  @media (min-width: 1024px) {
    padding-right: 80px;
    align-items: flex-start;
    max-width: 600px;
    margin-bottom: 0;
  }
`;
