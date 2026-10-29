import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CONTENT_MAX } from '../../theme';
import useBreakpoint from '../../hooks/useBreakpoint';

export default function Section({ bg = 'transparent', style, innerStyle, children }) {
  const { gutter, sectionSpace } = useBreakpoint();

  return (
    <View style={[styles.band, { backgroundColor: bg, paddingVertical: sectionSpace }, style]}>
      <View style={[styles.inner, { paddingHorizontal: gutter }, innerStyle]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  band: { width: '100%' },
  inner: { width: '100%', maxWidth: CONTENT_MAX, alignSelf: 'center' },
});
