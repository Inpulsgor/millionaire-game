import React from 'react';
import { ImageContainer, StyledImage } from './AppImage.styles';

type TypeAppImage = {
  src: string;
  alt: string;
};

const AppImage = ({ src, alt }: TypeAppImage) => {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt} />
    </ImageContainer>
  );
};

export default AppImage;
