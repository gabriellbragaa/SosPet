import { Platform } from 'react-native';
import { colors } from './colors';

const isWeb = Platform.OS === 'web';

export const transition = isWeb
  ? { transitionProperty: 'background-color, color, border-color, transform, opacity', transitionDuration: '160ms' }
  : null;

export const lift = isWeb ? { transform: [{ translateY: -2 }] } : null;

let usingKeyboard = false;
if (isWeb && typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') usingKeyboard = true;
  }, true);
  window.addEventListener('mousedown', () => {
    usingKeyboard = false;
  }, true);
}

const ring = { outlineStyle: 'solid', outlineWidth: 2, outlineColor: colors.orange, outlineOffset: 3 };

export function focusStyle(focused) {
  return isWeb && focused && usingKeyboard ? ring : null;
}
