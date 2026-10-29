import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, BODY_SEMIBOLD, transition, focusStyle, lift } from '../../theme';

// variant: 'primary' (vermelho) | 'ghost' (contorno)
// No navegador, `hovered` e `focused` vêm do react-native-web; no celular ficam undefined.
export default function Button({ title, onPress, variant = 'primary', style }) {
  const isPrimary = variant === 'primary';
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed, hovered, focused }) => [
        styles.base,
        transition,
        isPrimary ? styles.primary : styles.ghost,
        hovered && (isPrimary ? styles.primaryHover : styles.ghostHover),
        hovered && lift,
        focusStyle(focused),
        pressed && styles.pressed,
        style,
      ]}
    >
      {({ hovered }) => (
        <Text
          style={[
            styles.text,
            transition,
            isPrimary ? styles.textPrimary : styles.textGhost,
            hovered && !isPrimary && styles.textGhostHover,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: 999, paddingHorizontal: 20, paddingVertical: 12, minHeight: 46, justifyContent: 'center' },
  primary: { backgroundColor: colors.red },
  primaryHover: { backgroundColor: colors.redDark },
  ghost: { borderWidth: 1.5, borderColor: colors.dark, paddingVertical: 11 },
  ghostHover: { backgroundColor: colors.dark },
  pressed: { opacity: 0.75, transform: [{ translateY: 0 }] },
  text: { fontFamily: BODY_SEMIBOLD, fontSize: 15 },
  textPrimary: { color: colors.white },
  textGhost: { color: colors.dark },
  textGhostHover: { color: colors.white },
});
