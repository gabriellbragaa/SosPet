import { useWindowDimensions } from 'react-native';
import { BREAKPOINTS } from '../theme';

export default function useBreakpoint() {
  const { width } = useWindowDimensions();
  const isTablet = width >= BREAKPOINTS.tablet;
  const isDesktop = width >= BREAKPOINTS.desktop;

  return {
    width,
    isTablet,
    isDesktop,
    gutter: isDesktop ? 40 : isTablet ? 32 : 20,
    sectionSpace: isDesktop ? 72 : 40,
  };
}
