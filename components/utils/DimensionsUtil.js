import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Set constants for different screen sizes (if needed)
const DESIGN_WIDTH = 375; // Replace this with your design's width (for example, iPhone 6/7/8 width)
const DESIGN_HEIGHT = 667; // Replace this with your design's height (for example, iPhone 6/7/8 height)

// Function to calculate width according to the device screen
export function vw(value) {
  return (value / DESIGN_WIDTH) * width;
}

// Function to calculate height according to the device screen
export function vh(value) {
  return (value / DESIGN_HEIGHT) * height;
}

// Function to calculate font size according to the device screen
export function vf(value) {
  const scale = width / DESIGN_WIDTH;
  const newSize = value * scale;
  return Platform.OS === 'ios' ? Math.round(PixelRatio.roundToNearestPixel(newSize)) : Math.round(newSize);
}
export function getFullHeight() {
  return height;
}
export function getFullWidth() {
  return width;
}

// Export other dimensions if needed
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export default { vw, vh, vf, SCREEN_WIDTH, SCREEN_HEIGHT };
