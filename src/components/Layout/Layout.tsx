import React from 'react';
import AppImage from '../AppImage/AppImage';
import HandImg from '../../assets/hand.svg';
import { Content, PageWrapper, ViewContainer } from './Layout.styles';

type TLayout = {
  children: JSX.Element;
};

const Layout = ({ children }: TLayout) => {
  return (
    <PageWrapper>
      <ViewContainer>
        <AppImage src={HandImg} alt="thumbs-up" />

        <Content>{children}</Content>
      </ViewContainer>
    </PageWrapper>
  );
};

export default Layout;
