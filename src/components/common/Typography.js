import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, DISPLAY, DISPLAY_ITALIC, BODY, BODY_SEMIBOLD } from '../../theme';
import useBreakpoint from '../../hooks/useBreakpoint';

export function Eyebrow({ children, style }) {
  return <Text style={[styles.eyebrow, style]}>{children}</Text>;
}

export function Heading({ children, style }) {
  const { isDesktop } = useBreakpoint();
  return (
    <Text accessibilityRole="header" style={[styles.h2, isDesktop && styles.h2Desktop, style]}>
      {children}
    </Text>
  );
}

// Trecho em itálico marrom dentro de um <Heading>
export function Italic({ children }) {
  return <Text style={styles.italic}>{children}</Text>;
}

export function Body({ children, style }) {
  const { isDesktop } = useBreakpoint();
  return <Text style={[styles.body, isDesktop && styles.bodyDesktop, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  eyebrow: { fontFamily: BODY_SEMIBOLD, color: colors.red, fontSize: 12, letterSpacing: 1, marginTop: 10, marginBottom: 6 },
  h2: { fontFamily: DISPLAY, fontSize: 32, lineHeight: 36, color: colors.dark },
  h2Desktop: { fontSize: 52, lineHeight: 56 },
  italic: { fontFamily: DISPLAY_ITALIC, color: colors.brown },
  body: { fontFamily: BODY, marginTop: 12, fontSize: 15, lineHeight: 23, color: colors.muted, maxWidth: 640 },
  bodyDesktop: { fontSize: 17, lineHeight: 27 },
});
