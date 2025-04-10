import { PixelRatio } from 'react-native';

export const scaledFontSize = (size: number): number => {
  const fontScale = PixelRatio.getFontScale();
  return size * fontScale;
};
